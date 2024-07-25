import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipe,fetchRecipes,fetchRecipeNutrition } from '../utils'
import Loading from '../components/Loading'
import Header from '../components/Header'
import { AiFillPushpin } from "react-icons/ai"
import { BsPatchCheck } from "react-icons/bs"
import RecipeCard from '../components/RecipeCard'
const RecipeDetail = () => {
  
  const [querys,setQuery] = useState()
  const [limit] = useState(6)
  const [recipe, setRecipe] = useState(null)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [Nutrition,setNutrition] = useState(" ")

  const { id } = useParams()


  const getRecipe = async (id) => {
    try {
      setLoading(true)

      const data = await fetchRecipe(id)
      console.log('fetcheddata')
      console.log(data)

      setRecipe(data)
      console.log("recomend")
      const recommend = await fetchRecipes({query : data.title[3],limit})
      console.log(recommend)
      setRecipes(recommend)

      setLoading(false)


    } catch (error) {
      console.log(error)

      setLoading(false)
    }
  }

  useEffect(() => {
    getRecipe(id,querys)
  }, [id,querys])

  const getNutrition = async (id) => {
    try {
      setLoading(true)

      const data = await fetchRecipeNutrition(id)
     
      setNutrition(data)
      console.log("Nutrition")
      console.log(data)


    } catch (error) {
      console.log(error)

      setLoading(false)
    }
  }

  useEffect(() => {
    getNutrition(id)
  }, [id])


  if (loading) {
    return (
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <Loading />
      </div>
    );
  }
  return (
    <div className='w-full'>
      <Header
        title={recipe?.title} image={recipe?.image}/>

      <div className='w-full px-4 lg:px-20 pt-5'>

        <div className='flex gap-10 items-center justify-center px-4'>
          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>{recipe?.cuisines[0]} </span>

            <p className='text-neutral-100 text-[12px] md:text-md'>CRUISINES</p>
          </div>

           <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.readyInMinutes}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>
              TOTAL TIME
            </p>
          </div> 

          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.servings}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>SERVINGS</p>
          </div>
          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.healthScore}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>HLabel</p>
            </div>
          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.pricePerServing}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>PricePerServing</p>
          </div>


        </div>

        <div className='w-full flex flex-col md:flex-row gap-8 py-20 pxx-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Ingredients</p>

              {
                recipe?.extendedIngredients?.map((ingredient, index) => {
                  return (
                    <p key={index} className='text-neutral-100 flex gap-2'>
                      <AiFillPushpin className='text-green-800 text-xl' /> {ingredient.name}  -  {ingredient.measures.metric.amount}  {ingredient.measures.metric.unitLong}
                    </p>
                  )
                })
              }
            </div>
            <br/>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Preparation</p>
              {
                recipe?.analyzedInstructions[0].steps
                ?.map((ingredient, index) => {
                  return (
                    <p key={index} className='text-neutral-100 flex gap-2'>
                      {ingredient.number} {ingredient.step}
                    </p>
                  )
                })
              }
            </div>

            {/* <div className='flex flex-col gap-3 mt-20'>
              <p className='text-green-700 text-2xl underline'>Health Labels</p>
                <div className='flex flex-wrap gap-4'>
                {
                  recipe?.healthLabels.map((item, index) => (
                    <p className='text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full ' key={index}>
                      <BsPatchCheck color='green' /> {item}
                    </p>
                  ))
                }

              </div>
            </div> */}
          </div>


          {/* RIGHT SIDE */}
          <div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
          <div div className='flex flex-col gap-5'>
                {Nutrition && (
                  <>
                    <p className='text-green-500 text-2xl underline'>Nutrition Information</p>
                    {/* Display specific nutritional information */}
                    <p className='text-neutral-100 flex gap-2'>
                      <AiFillPushpin className='text-green-800 text-xl' /> Calories: {Nutrition.calories}
                    </p>
                    <p className='text-neutral-100 flex gap-2'>
                      <AiFillPushpin className='text-green-800 text-xl' /> Carbohydrates: {Nutrition.carbs}
                    </p>
                    <p className='text-neutral-100 flex gap-2'>
                      <AiFillPushpin className='text-green-800 text-xl' /> Fats: {Nutrition.fat}
                    </p>
                    <p className='text-neutral-100 flex gap-2'>
                      <AiFillPushpin className='text-green-800 text-xl' /> Protein: {Nutrition.protein}
                    </p>
                    {/* Similarly, access other nutritional information as needed */}
                  </>
                )}
                </div>
                <br/>
                <br/>
                <div div className='flex flex-col gap-8'></div>

          
            {
              recipes?.length > 0 && (
                <>
                  <p className='text-white text-2xl'>Also Try This</p>

                  <div className='flex flex-wrap gap-6 px-1 pt-3'>
                    {
                      recipes?.map((item, index) => (
                        <RecipeCard recipe={item} index={index} />
                      ))
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
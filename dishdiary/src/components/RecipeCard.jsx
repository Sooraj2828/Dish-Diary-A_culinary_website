import React from 'react'
import { Link } from 'react-router-dom'
import { fetchRecipes } from '../utils'

const RecipeCard = (results ,query) => {
    const { id,title,image } = results?.recipe

    return (
        <Link to={`/recipes/${id}?query=${query}`} className='w-full md:w-[220px]'>
            <div className='bg-_gradient shadow w-full rounded-lg'>
                <img src={image} alt={title} className='rounded-lg h-[200px] md:h-[150px] w-full' />

                <div className='p-3'>
                    <p className='text-white font-semibold'>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard



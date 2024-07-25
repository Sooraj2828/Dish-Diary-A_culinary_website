import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
        <Header
         title = {
            <p>Welcome to DishDiary,</p> 
         }
         type='Home'
        />
<section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:'>
  <Recipes />
</section>
       
    </main>
  )
}

export default Home

import React from 'react'
import RecipeCard from '../components/recipe/RecipeCard';
import { getRandomColor } from '../utils/utils';

const FavouritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className=' max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

          {favorites.length === 0 && (
            <div className='h-[80vh] flex flex-col items-center gap-4'>
            <img src='/404.svg' className='h-3/4' alt='error'/>
          </div>
          )}

          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />
            ))}             
          </div>
       
      </div>
    </div>
  )
}

export default FavouritesPage
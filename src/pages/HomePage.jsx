import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/recipe/RecipeCard';
import { getRandomColor } from '../utils/utils';

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const keywords = ["egg", "chicken", "meat", "soup", "noodles", "fish","sandwitch","salad"];

  const fetchRecipes = async (query) => {
    setIsLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`);
      const data = await res.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    fetchRecipes(randomKeyword);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes(searchQuery);
  };

  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form onSubmit={handleSubmit}>
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={"24"} />
            <input
              type='text'
              className='text-sm md:text-md grow'
              placeholder='What do you want to cook today?'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </form>
        <h1 className='font-bold text-3xl md:text-5xl mt-4'>
          Recommended Recipes
        </h1>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
          Popular Choices
        </p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {isLoading ? (
            [...Array(9)].map((_, index) => (
              <div key={index} className='flex flex-col gap-4 w-full'>
                <div className='skeleton h-32 w-full'></div>
                <div className='flex justify-between'>
                  <div className='skeleton h-4 w-28'></div>
                  <div className='skeleton h-4 w-28'></div>
                </div>
                <div className='skeleton h-4 w-1/2'></div>
              </div>
            ))
          ) : (
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;



// import { Search } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import RecipeCard from '../components/recipe/RecipeCard';
// import { getRandomColor } from '../utils/utils';


// const APP_ID = "93b10b8e"; // Ensure these values are correct
// const APP_KEY = "d2f7ab53336a1b75b8dfedec90ca6afb";

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); 
  

//   const fetchRecipes = async (search_query) => {
//     setIsLoading(true);
//     setRecipes([]);
//     try {
//       const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${search_query}&type=public`);

//       const data = await res.json();
      
//       setRecipes(data.hits); 
//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       isLoading(false);
//     }
//   };

  

//   useEffect(() => {
//     fetchRecipes("chicken");
//   },[]);
//   return (
//     <div className='bg-[#faf9fb] p-10 flex-1'>
//       <div className='max-w-screen-lg mx-auto'>
//         <form >
//           <label className='input shadow-md flex items-center gap-2'>
//             <Search size={"24"} />
//             <input
//               type='text'
//               className='text-sm md:text-md grow'
//               placeholder='What do you want to cook today?'
//             />
//           </label>
//         </form>
//         <h1 className='font-bold text-3xl md:text-5xl mt-4'>
//           Recommended Recipes
//         </h1>
//         <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
//           Popular Choices
//         </p>
//         <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

//           {isLoading && recipes.map(({recipe},index) => (
//             <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
//           ))}


//          {!isLoading && 
//          [...Array(9)].map((_, index) => (
//           <div key={index} className='flex flex-col gap-4 w-full'>
//             <div className=' skeleton h-32 w-full'></div>
//             <div className='flex justify-between'>
//               <div className=' skeleton h-4 w-28'></div>
//               <div className=' skeleton h-4 w-28'></div>
//             </div>
//             <div className=' skeleton h-4 w-1/2'></div>
//           </div>  
//          ))
//          }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;







// // import { Search } from 'lucide-react'
// // import React, { useState } from 'react'
// // import RecipeCard from '../components/recipe/RecipeCard'


// // const APP_ID = "93b10b8e"
// // const APP_KEY = "d2f7ab53336a1b75b8dfedec90ca6afb"
// // const HomePage = () => {
// //   const [recipes, setRecipes] = useState([]);
// //   const [isLoading, setIsLoading ] = useState(true);

// //   const fetchRecipes = async (serach) => {
// //     setIsLoading(true);
// //     setRecipes([]);
// //     try {
// //       const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${serach}&type=public`)

// //       const data = await res.json()
// //       console.log(data)
// //     } catch (error) {
// //       console.log(error.message)
// //     }finally{
// //       setIsLoading(false  )
// //     }
// //   }

// //   return (
// //     <div className='bg-[#faf9fb] p-10 flex-1'>
// //       <div className='max-w-screen-lg mx-auto'>
// //         <form>
// //           <label className=' input shadow-md flex items-center gap-2'>
// //             <Search size={"24"}/>
// //             <input 
// //               type='text'
// //               className='text-sm md:text-md grow'
// //               placeholder='What do you want to cook today?'
// //             />
// //           </label>
// //         </form>
// //         <h1 className=' font-bold text-3xl md:text-5xl mt-4'>
// //           Recommended Recipes
// //         </h1>
// //         <p className=' text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
// //           Popular Choices
// //         </p>
// //         <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
// //           {/* 1ST RECIPE */}

// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //           <RecipeCard />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default HomePage
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import recipesData from "../data/recipes.json";
import imageMap from "../components/imageMap";
import defaultImage from "../images/food-images/defaultImage.png";

// Przekształcanie danych JSON na dane z obrazkami
const przepisDane = recipesData.map((recipe) => ({
   ...recipe,
   image: imageMap[recipe.imageId],
}));

const Przepisy = () => {
   const [filter, setFilter] = useState("");

   // Filtrowanie przepisów na podstawie tekstu w polu filtracji
   const filteredPrzepisy = przepisDane.filter(
      (recipe) =>
         recipe.title &&
         recipe.title.toLowerCase().includes(filter.toLowerCase())
   );

   return (
      <div className='px-4 md:px-6 py-6 max-w-6xl mx-auto'>
         <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6 dark:text-gray-200'>
            Przepisy
         </h1>

         {/* Pole do filtrowania */}
         <input
            type='text'
            placeholder='Wyszukaj przepis...'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='w-full md:w-1/2 mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
         />

         {/* Kontener siatki dla przepisów */}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {filteredPrzepisy.map((recipe) => (
               <Link
                  to={`/przepisy/${recipe.link}`}
                  key={recipe.id}
                  className='bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-700 hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col'
               >
                  <img
                     src={recipe.image || defaultImage}
                     alt={recipe.title}
                     className='w-full h-48 object-cover'
                  />
                  <p className='p-4 text-gray-800 font-medium dark:text-gray-200'>
                     {recipe.title}
                  </p>
               </Link>
            ))}
         </div>

         {/* Wyjście dla podstron */}
         <Outlet />
      </div>
   );
};

export default Przepisy;

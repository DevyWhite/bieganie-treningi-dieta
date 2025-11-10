import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import recipesData from "../data/recipes.json";
import imageMap from "../components/imageMap";
import defaultImage from "../images/food-images/defaultImage.png";

// Łączenie danych JSON z obrazkami
const przepisDane = recipesData.map((recipe) => ({
   ...recipe,
   image: imageMap[recipe.imageId],
}));

const Przepisy = () => {
   const [filter, setFilter] = useState("");

   usePageTitle("Przepisy");

   // Filtrowanie przepisów
   const filteredPrzepisy = przepisDane.filter(
      (recipe) =>
         recipe.title &&
         recipe.title.toLowerCase().includes(filter.toLowerCase())
   );

   return (
      <div className='px-4 md:px-6 py-6 max-w-6xl mx-auto transition-colors duration-300'>
         {/* Tytuł sekcji */}
         <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6'>
            Przepisy
         </h1>

         {/* Pole wyszukiwania */}
         <input
            type='text'
            placeholder='Wyszukaj przepis...'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='w-full md:w-1/2 mb-6 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors duration-200'
         />

         {/* Lista przepisów */}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {filteredPrzepisy.map((recipe) => (
               <Link
                  to={`/przepisy/${recipe.link}`}
                  key={recipe.id}
                  className='bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col group'
               >
                  <img
                     src={recipe.image || defaultImage}
                     alt={recipe.title}
                     className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <p className='p-4 text-gray-800 dark:text-gray-100 font-medium text-center'>
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

import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes.json";
import imageMap from "../components/imageMap";
import defaultImage from "../images/food-images/defaultImage.png";

const RecipePage = () => {
   const { recipeId } = useParams();
   const przepis = recipes.find((item) => item.link === recipeId);

   if (!przepis) {
      return (
         <div className='px-4 py-6 text-center text-gray-600 dark:text-gray-400 transition-colors duration-300'>
            Przepis nie został znaleziony.
         </div>
      );
   }

   return (
      <div className='max-w-4xl mx-auto px-4 py-8 space-y-8 transition-colors duration-300'>
         {/* Obrazek */}
         <img
            src={imageMap[przepis.imageId] || defaultImage}
            alt={przepis.title}
            className='w-full h-64 md:h-80 object-cover rounded-2xl shadow-md dark:shadow-gray-800'
         />

         {/* Tytuł */}
         <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2'>
            {przepis.title}
         </h2>

         {/* Zawartość */}
         <div className='flex flex-col md:flex-row gap-6'>
            {/* Składniki */}
            <div className='md:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-700 p-5 transition-colors duration-300'>
               <h3 className='text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100'>
                  Składniki:
               </h3>
               <ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300'>
                  {przepis.ingredients.map((ingredient, index) => (
                     <li key={index}>{ingredient}</li>
                  ))}
               </ul>
            </div>

            {/* Wykonanie */}
            <div className='md:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-700 p-5 transition-colors duration-300'>
               <h3 className='text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100'>
                  Wykonanie:
               </h3>
               <div className='space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed'>
                  {przepis.description.map((step, index) => (
                     <p key={index}>{step}</p>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default RecipePage;

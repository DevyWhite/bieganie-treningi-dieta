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
         <div className='px-4 py-6 text-center text-gray-500'>
            Przepis nie został znaleziony.
         </div>
      );
   }

   return (
      <div className='max-w-4xl mx-auto px-4 py-6 space-y-6'>
         <img
            src={imageMap[przepis.imageId] || defaultImage}
            alt={przepis.title}
            className='w-full h-64 md:h-80 object-cover rounded-xl shadow'
         />
         <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
            {przepis.title}
         </h2>

         <div className='flex flex-col md:flex-row gap-6'>
            {/* Składniki */}
            <div className='md:w-1/2 bg-white rounded-xl shadow p-4'>
               <h3 className='text-xl font-medium mb-2'>Składniki:</h3>
               <ul className='list-disc list-inside space-y-1 text-gray-700'>
                  {przepis.ingredients.map((ingredient, index) => (
                     <li key={index}>{ingredient}</li>
                  ))}
               </ul>
            </div>

            {/* Wykonanie */}
            <div className='md:w-1/2 bg-white rounded-xl shadow p-4'>
               <h3 className='text-xl font-medium mb-2'>Wykonanie:</h3>
               <div className='space-y-2 text-gray-700'>
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

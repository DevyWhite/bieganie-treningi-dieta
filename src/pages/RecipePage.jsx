import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes.json"; // Importujemy szczegółowe dane z przepisami
import imageMap from "../components/imageMap";
import "../styles/RecipeCard.css";

const RecipePage = () => {
   const { recipeId } = useParams();
   const przepis = recipes.find((item) => item.link === recipeId);

   if (!przepis) {
      return <p>Przepis nie został znaleziony.</p>;
   }

   return (
      <div className='recipe-card'>
         <img
            src={imageMap[przepis.imageId]}
            alt={przepis.title}
            className='recipe-image'
         />
         <h2 className='recipe-title'>{przepis.title}</h2>
         <div className='recipe-content'>
            <div className='recipe-ingredients'>
               <h3>Składniki:</h3>
               <ul>
                  {przepis.ingredients.map((ingredient, index) => (
                     <li key={index}>{ingredient}</li>
                  ))}
               </ul>
            </div>
            <div className='recipe-preparation'>
               <h3>Wykonanie:</h3>
               {przepis.description.map((step, index) => (
                  <p key={index}>{step}</p>
               ))}
            </div>
         </div>
      </div>
   );
};

export default RecipePage;

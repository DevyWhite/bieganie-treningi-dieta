import React from "react";

const RecipeCard = ({ title, image, description, ingredients }) => {
   return (
      <div className='recipe-card'>
         <img src={image} alt={title} className='recipe-image' />
         <h2 className='recipe-title'>{title}</h2>
         <div className='recipe-content'>
            <div className='recipe-ingredients'>
               <h3>Składniki:</h3>
               <ul>
                  {ingredients.map((ingredient, index) => (
                     <li key={index}>{ingredient}</li>
                  ))}
               </ul>
            </div>
            <div className='recipe-preparation'>
               <h3>Przygotowanie:</h3>
               <p>{description}</p>
            </div>
         </div>
      </div>
   );
};

export default RecipeCard;

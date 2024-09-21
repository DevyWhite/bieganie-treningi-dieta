import React from "react";
import "../styles/Batony.css";
import RecipeCard from "../components/RecipeCard";
import recipesData from "../data/batony.json";
import imageMap from "../components/imageMap";

const recipes = recipesData.map((recipe) => ({
   ...recipe,
   image: imageMap[recipe.imageId], // Mapowanie identyfikatorów na obrazy
}));

const Batony = () => {
   return (
      <div>
         <h1>Batony Energetyczne</h1>
         <img
            src={require("../images/batony_baner.jpg")}
            alt='Batony Energetyczne'
            className='banner-image'
         />
         <p>
            Tutaj znajdziesz przepis na batony energetyczne. Są one doskonałym
            źródłem energii na co dzień. Oto pełny przepis, składniki oraz
            sposób przygotowania.
         </p>
         <div className='recipes-container'>
            {recipes.map((recipe) => (
               <RecipeCard
                  key={recipe.id}
                  title={recipe.title}
                  image={recipe.image} // Używaj zaimportowanych obrazków
                  description={recipe.description}
                  ingredients={recipe.ingredients}
               />
            ))}
         </div>
      </div>
   );
};

export default Batony;

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Przepisy.css";
import recipesData from "../data/recipes.json";
import imageMap from "../components/imageMap";

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
      <div>
         <h1>Przepisy</h1>

         {/* Pole do filtrowania */}
         <input
            type='text'
            placeholder='Wyszukaj przepis...'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
         />

         {/* Kontener siatki dla przepisów */}
         <div className='grid-container'>
            {filteredPrzepisy.map((recipe) => (
               <div className='grid-item' key={recipe.id}>
                  <Link
                     to={`/przepisy/${recipe.link}`}
                     className='przepis-link'
                  >
                     <img
                        src={recipe.image}
                        alt={recipe.title}
                        className='przepis-image'
                     />
                     <p className='przepis-title'>{recipe.title}</p>
                  </Link>
               </div>
            ))}
         </div>

         {/* Wyjście dla podstron */}
         <Outlet />
      </div>
   );
};

export default Przepisy;

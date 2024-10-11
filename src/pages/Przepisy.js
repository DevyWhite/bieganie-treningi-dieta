import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Przepisy.css";
import przepisyData from "../data/przepisy.json";
import imageMap from "../components/imageMap";

// Przekształcanie danych JSON na dane z obrazkami
const przepisDane = przepisyData.map((przepis) => ({
   ...przepis,
   image: imageMap[przepis.imageId],
}));

const Przepisy = () => {
   const [filter, setFilter] = useState("");

   // Filtrowanie przepisów na podstawie tekstu w polu filtracji
   const filteredPrzepisy = przepisDane.filter(
      (przepis) =>
         przepis.title &&
         przepis.title.toLowerCase().includes(filter.toLowerCase())
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
            {filteredPrzepisy.map((przepis) => (
               <div className='grid-item' key={przepis.id}>
                  <Link to={przepis.link} className='przepis-link'>
                     <img
                        src={przepis.image}
                        alt={przepis.title}
                        className='przepis-image'
                     />
                     <p className='przepis-title'>{przepis.title}</p>
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

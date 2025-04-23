import React, { useState } from "react";
import "../styles/Dieta.css";
import daneDiety from "../data/daneDiety.json";

const Dieta = () => {
   const [wybranyTydzien, setWybranyTydzien] = useState(null);
   const [wybranyDzien, setWybranyDzien] = useState(null);
   const [wybranyPosilek, setWybranyPosilek] = useState(null);

   const handleTydzienClick = (tydzien) => {
      setWybranyTydzien(tydzien === wybranyTydzien ? null : tydzien);
      setWybranyDzien(null);
      setWybranyPosilek(null);
   };

   const handleDzienClick = (dzien) => {
      setWybranyDzien(dzien === wybranyDzien ? null : dzien);
      setWybranyPosilek(null);
   };

   const handlePosilekClick = (posilek) => {
      setWybranyPosilek(posilek === wybranyPosilek ? null : posilek);
   };

   return (
      <div className='dieta'>
         <h4>Diety nieaktualizowane!</h4>
         <div className='tydzien-list'>
            {daneDiety.map((tydzienData) => (
               <div key={tydzienData.tydzien}>
                  <button
                     className='tydzien-btn'
                     onClick={() => handleTydzienClick(tydzienData.tydzien)}
                  >
                     {tydzienData.tydzien}
                  </button>
                  {wybranyTydzien === tydzienData.tydzien && (
                     <div className='dzien-list'>
                        {tydzienData.dni.map((dzienData) => (
                           <div key={dzienData.dzien}>
                              <button
                                 className='dzien-btn'
                                 onClick={() =>
                                    handleDzienClick(dzienData.dzien)
                                 }
                              >
                                 {dzienData.dzien}
                              </button>
                              {wybranyDzien === dzienData.dzien && (
                                 <div className='posilki-list'>
                                    {dzienData.posilki.map((posilek) => (
                                       <div
                                          key={posilek.nazwa}
                                          className='posilek'
                                       >
                                          <button
                                             className='posilek-btn'
                                             onClick={() =>
                                                handlePosilekClick(
                                                   posilek.nazwa
                                                )
                                             }
                                          >
                                             {posilek.nazwa}
                                          </button>
                                          {wybranyPosilek === posilek.nazwa && (
                                             <div className='posilek-details'>
                                                <div className='posilek-grid'>
                                                   <div className='posilek-skladniki'>
                                                      <p>Składniki:</p>
                                                      <ul>
                                                         {posilek.skladniki.map(
                                                            (skladnik, i) => (
                                                               <li key={i}>
                                                                  {skladnik}
                                                               </li>
                                                            )
                                                         )}
                                                      </ul>
                                                   </div>
                                                   <div className='posilek-przygotowanie'>
                                                      <p>Przygotowanie:</p>
                                                      <p className='przygotowanie-text'>
                                                         {posilek.przygotowanie}
                                                      </p>
                                                   </div>
                                                </div>
                                             </div>
                                          )}
                                       </div>
                                    ))}
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Dieta;

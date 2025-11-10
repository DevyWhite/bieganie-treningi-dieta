import React, { useState, useEffect } from "react";
import racesData from "../data/zawodyBiegowe.json";
import { usePageTitle } from "../hooks/usePageTitle";

const ZawodyBiegowe = () => {
   const [races, setRaces] = useState([]);
   const [openRace, setOpenRace] = useState(null);

   usePageTitle("Zawody Biegowe");

   useEffect(() => {
      setRaces(racesData || []);
   }, []);

   const toggleAccordion = (id) => {
      setOpenRace(openRace === id ? null : id);
   };

   return (
      <div className='max-w-6xl mx-auto px-4 py-10 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen'>
         {/* Nagłówek strony */}
         <h1 className='text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200'>
            🏁 Lista Zawodów Biegowych
         </h1>

         {/* Siatka zawodów */}
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {races.map((race) => (
               <div
                  key={race.id}
                  className='bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-600 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 dark:border-gray-700'
               >
                  {/* Zdjęcie zawodów */}
                  {race.image && (
                     <div className='h-48 w-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center overflow-hidden'>
                        <img
                           src={race.image}
                           alt={race.name}
                           className='max-h-full max-w-full object-contain'
                        />
                     </div>
                  )}

                  {/* Treść karty */}
                  <div className='flex-1 flex flex-col p-5'>
                     <h2 className='text-lg font-semibold text-gray-800 dark:text-emerald-400 mb-2'>
                        {race.name}
                     </h2>

                     <p className='text-gray-600 dark:text-gray-200 text-sm mb-4 leading-relaxed'>
                        {race.description}
                     </p>

                     {/* Accordion */}
                     <div className='border-t border-gray-200 dark:border-gray-700 pt-2 mt-auto'>
                        <button
                           onClick={() => toggleAccordion(race.id)}
                           className='w-full flex justify-between items-center text-gray-700 dark:text-gray-200 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition'
                        >
                           <span>Dostępne biegi</span>
                           <span
                              className={`transform transition-transform duration-300 ${
                                 openRace === race.id ? "rotate-90" : ""
                              }`}
                           >
                              ▶
                           </span>
                        </button>

                        <div
                           className={`transition-all duration-500 ease-in-out overflow-hidden ${
                              openRace === race.id
                                 ? "max-h-[500px] opacity-100"
                                 : "max-h-0 opacity-0"
                           }`}
                        >
                           <ul className='mt-2 text-sm text-gray-600 dark:text-gray-200 space-y-1'>
                              {race.events.map((event, index) => (
                                 <li
                                    key={index}
                                    className='flex justify-between px-2 py-1 border-b border-gray-100 dark:border-gray-700 last:border-none'
                                 >
                                    <span className='font-medium'>
                                       {event.distance}
                                    </span>
                                    <span>{event.description}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     {/* Przycisk */}
                     {race.link && (
                        <a
                           href={race.link}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='mt-4 inline-block text-center bg-blue-600 dark:bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-300'
                        >
                           Więcej informacji
                        </a>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ZawodyBiegowe;

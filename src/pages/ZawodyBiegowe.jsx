import React, { useState, useEffect } from "react";
import racesData from "../data/zawodyBiegowe.json";

const ZawodyBiegowe = () => {
   const [races, setRaces] = useState([]);
   const [openRace, setOpenRace] = useState(null);

   useEffect(() => {
      setRaces(racesData || []);
   }, []);

   const toggleAccordion = (id) => {
      setOpenRace(openRace === id ? null : id);
   };

   return (
      <div className='max-w-6xl mx-auto px-4 py-10'>
         <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
            🏁 Lista zawodów biegowych
         </h1>

         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {races.map((race) => (
               <div
                  key={race.id}
                  className='bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col'
               >
                  {/* Zdjęcie zawodów */}
                  {race.image && (
                     <div className='h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden'>
                        <img
                           src={race.image}
                           alt={race.name}
                           className='max-h-full max-w-full object-contain'
                        />
                     </div>
                  )}

                  {/* Treść karty */}
                  <div className='flex-1 flex flex-col p-5'>
                     <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                        {race.name}
                     </h2>

                     <p className='text-gray-600 text-sm mb-4'>
                        {race.description}
                     </p>

                     {/* Accordion */}
                     <div className='border-t border-gray-200 pt-2 mt-auto'>
                        <button
                           onClick={() => toggleAccordion(race.id)}
                           className='w-full flex justify-between items-center text-gray-700 font-medium py-2 hover:text-blue-600 transition'
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
                           <ul className='mt-2 text-sm text-gray-600 space-y-1'>
                              {race.events.map((event, index) => (
                                 <li
                                    key={index}
                                    className='flex justify-between px-2 py-1 border-b border-gray-100 last:border-none'
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
                           className='mt-4 inline-block text-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition'
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

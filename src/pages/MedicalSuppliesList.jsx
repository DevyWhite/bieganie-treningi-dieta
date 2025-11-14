import React from "react";
import medicalSupplies from "../data/medicalSupplies.json";

const MedicalSuppliesList = () => {
   return (
      <section className='mt-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
         <h3 className='text-xl font-semibold text-gray-800 mb-6 dark:text-emerald-400'>
            Lista leków i asortymentu medycznego
         </h3>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {medicalSupplies.map((item, index) => (
               <div
                  key={index}
                  className='bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-600 transition-shadow duration-300 flex flex-col'
               >
                  {/* Obrazek */}
                  {item.imageUrl && (
                     <img
                        src={item.imageUrl}
                        alt={item.name}
                        className='h-48 w-full object-contain bg-gray-50 dark:bg-gray-700 p-3'
                     />
                  )}

                  {/* Zawartość */}
                  <div className='flex flex-col flex-grow p-4'>
                     <h5 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                        {item.name}
                     </h5>
                     <p className='text-gray-600 dark:text-gray-300 text-sm flex-grow leading-relaxed text-left'>
                        {item.description}
                     </p>

                     {item.link && (
                        <a
                           href={item.link}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='mt-4 inline-block text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-300'
                        >
                           Więcej informacji →
                        </a>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default MedicalSuppliesList;

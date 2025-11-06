import React from "react";
import medicalSupplies from "../data/medicalSupplies.json";

const MedicalSuppliesList = () => {
   return (
      <section className='mt-6'>
         <h3 className='text-xl font-semibold text-gray-800 mb-6'>
            Lista leków i asortymentu medycznego
         </h3>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {medicalSupplies.map((item, index) => (
               <div
                  key={index}
                  className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col'
               >
                  {/* Obrazek */}
                  {item.imageUrl && (
                     <img
                        src={item.imageUrl}
                        alt={item.name}
                        className='h-48 w-full object-contain bg-gray-50 p-3'
                     />
                  )}

                  {/* Zawartość */}
                  <div className='flex flex-col flex-grow p-4'>
                     <h5 className='text-lg font-semibold text-gray-800 mb-2'>
                        {item.name}
                     </h5>
                     <p className='text-gray-600 text-sm flex-grow'>
                        {item.description}
                     </p>

                     {item.link && (
                        <a
                           href={item.link}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300'
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

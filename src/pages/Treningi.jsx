import React, { useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import MenuNawigacyjne from "../components/MenuNawigacyjne";
import DrzewkoDni from "../components/DrzewkoDni";
import treningiTygodnie from "../data/treningiTygodnie.json";

const Treningi = () => {
   usePageTitle("Plan treningowy");
   const [aktywnyTydzien, ustawAktywnyTydzien] = useState(
      treningiTygodnie.length - 1
   );

   return (
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-1 py-5 sm:py-10 sm:px-4 flex flex-col items-center'>
         {/* Nagłówek */}
         <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center'>
            🏋️‍♂️ Plan treningowy - Tydzień {aktywnyTydzien + 1}
         </h1>

         {/* Nawigacja między tygodniami */}
         <div className='w-full max-w-4xl mb-8'>
            <MenuNawigacyjne
               tygodnie={treningiTygodnie}
               ustawTydzien={ustawAktywnyTydzien}
               aktywnyTydzien={aktywnyTydzien}
            />
         </div>

         {/* Drzewko dni */}
         <div
            className='w-full max-w-4xl 
               bg-white dark:bg-gray-800 
               shadow-md dark:shadow-gray-800 
               rounded-2xl p-6 
               border border-gray-100 dark:border-gray-700
               transition-all duration-300'
         >
            <DrzewkoDni dni={treningiTygodnie[aktywnyTydzien]} />
         </div>
      </div>
   );
};

export default Treningi;

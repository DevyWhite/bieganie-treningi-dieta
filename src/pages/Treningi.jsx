import React, { useState } from "react";
import MenuNawigacyjne from "../components/MenuNawigacyjne";
import DrzewkoDni from "../components/DrzewkoDni";
import treningiTygodnie from "../data/treningiTygodnie.json";

const Treningi = () => {
   const [aktywnyTydzien, ustawAktywnyTydzien] = useState(0);

   return (
      <div className='min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center'>
         <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
            Plan Treningowy – Tydzień {aktywnyTydzien + 1}
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
         <div className='w-full max-w-4xl bg-white shadow-md rounded-2xl p-6 border border-gray-100'>
            <DrzewkoDni dni={treningiTygodnie[aktywnyTydzien]} />
         </div>
      </div>
   );
};

export default Treningi;

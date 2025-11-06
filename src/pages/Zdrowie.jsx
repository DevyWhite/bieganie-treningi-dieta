import React from "react";
import { HeartPlus } from "lucide-react";
import MedicalSuppliesList from "./MedicalSuppliesList";

const Zdrowie = () => {
   return (
      <div className='space-y-6'>
         {/* Nagłówek sekcji */}
         <div className='flex items-center gap-2 border-b border-gray-200 pb-2'>
            <HeartPlus className='text-red-500 w-6 h-6' />
            <h1 className='text-2xl font-semibold text-gray-800'>
               Apteczka biegacza
            </h1>
         </div>

         {/* Opis sekcji */}
         <p className='text-gray-600 leading-relaxed'>
            Bieganie to nie tylko kilometry i treningi — to też dbanie o ciało.
            Tu znajdziesz zestaw rzeczy, które warto mieć pod ręką w razie
            kontuzji, przetarć lub zwykłego zmęczenia po długim wybieganiu.
         </p>

         {/* Lista apteczki */}
         <div className='bg-gray-50 rounded-lg shadow-sm p-4'>
            <MedicalSuppliesList />
         </div>
      </div>
   );
};

export default Zdrowie;

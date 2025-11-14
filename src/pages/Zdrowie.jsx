import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import MedicalSuppliesList from "./MedicalSuppliesList";

const Zdrowie = () => {
   usePageTitle("Apteczka Biegacza");
   return (
      <div className='max-w-4xl mx-auto px-4 py-8 space-y-6 transition-colors duration-300'>
         {/* Nagłówek sekcji */}
         <div className='flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-3'>
            <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200'>
               🩺 Apteczka Biegacza
            </h1>
         </div>

         {/* Opis sekcji */}
         <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-left'>
            Bieganie to nie tylko kilometry i treningi - to też dbanie o ciało.
            Tu znajdziesz zestaw rzeczy, które warto mieć pod ręką w razie
            kontuzji, przetarć lub zwykłego zmęczenia po długim wybieganiu.
         </p>

         {/* Lista apteczki */}
         <MedicalSuppliesList />
      </div>
   );
};

export default Zdrowie;

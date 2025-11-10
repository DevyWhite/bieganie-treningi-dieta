import React, { useEffect, useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import stretchingExercisesData from "../data/stretching.json";

const Stretching = () => {
   const [exercises, setExercises] = useState([]);
   usePageTitle("Stretching");

   useEffect(() => {
      setExercises(stretchingExercisesData);
   }, []);

   return (
      <div className='stretching-container max-w-5xl mx-auto px-4 py-10 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen'>
         {/* --- Główny nagłówek --- */}
         <h1 className='text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center'>
            🤸‍♂️ Ćwiczenia Rozciągające po Bieganiu
         </h1>

         {/* Lista ćwiczeń */}
         <ol className='space-y-6'>
            {exercises.map((exercise, index) => (
               <li
                  key={index}
                  className='p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-600 transition-all duration-300'
               >
                  <h2 className='text-xl font-semibold text-gray-800 dark:text-emerald-400 mb-3'>
                     {exercise.title}
                  </h2>

                  <p className='text-gray-700 dark:text-gray-200 mb-2 leading-relaxed'>
                     <strong>Jak wykonać:</strong> {exercise.description}
                  </p>

                  {exercise.time && (
                     <p className='text-gray-700 dark:text-gray-200 mb-1 leading-relaxed'>
                        <strong>Czas:</strong> {exercise.time}
                     </p>
                  )}

                  {exercise.repetitions && (
                     <p className='text-gray-700 dark:text-gray-200 mb-1 leading-relaxed'>
                        <strong>Powtórzenia:</strong> {exercise.repetitions}
                     </p>
                  )}

                  {exercise.time_or_repetitions && (
                     <p className='text-gray-700 dark:text-gray-200 mb-1 leading-relaxed'>
                        <strong>Czas lub powtórzenia:</strong>{" "}
                        {exercise.time_or_repetitions}
                     </p>
                  )}
               </li>
            ))}
         </ol>

         {/* Dodatkowe wskazówki */}
         <h2 className='text-xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200'>
            Dodatkowe wskazówki
         </h2>
         <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 leading-relaxed'>
            <li>
               <strong>Oddychaj głęboko:</strong> Utrzymuj spokojny oddech
               podczas każdego rozciągania.
            </li>
            <li>
               <strong>Nie spiesz się:</strong> Pamiętaj o kontrolowanym ruchu.
            </li>
            <li>
               <strong>Słuchaj swojego ciała:</strong> Jeżeli poczujesz ból,
               zmniejsz intensywność rozciągania.
            </li>
         </ul>
      </div>
   );
};

export default Stretching;

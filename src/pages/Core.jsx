import React, { useEffect, useState } from "react";
import coreExercisesData from "../data/coreExercises.json";
import { usePageTitle } from "../hooks/usePageTitle";

const Core = () => {
   const [exercises, setExercises] = useState([]);
   usePageTitle("Core");

   useEffect(() => {
      setExercises(coreExercisesData);
   }, []);

   return (
      <div className='core-container max-w-5xl mx-auto px-4 py-10 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen'>
         {/* --- Główny nagłówek --- */}
         <h1 className='text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center'>
            💪 Zestaw Ćwiczeń Wzmacniających Core
         </h1>

         {/* Lista ćwiczeń */}
         <ol className='space-y-6'>
            {exercises.map((exercise, index) => (
               <li
                  key={index}
                  className='p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-600 transition-all duration-300'
               >
                  <h2 className='text-xl font-semibold mb-2 text-gray-800 dark:text-emerald-400'>
                     {exercise.title}
                  </h2>
                  <p className='text-gray-700 dark:text-gray-200 mb-1 leading-relaxed'>
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
                  {exercise.benefits && (
                     <p className='text-gray-700 dark:text-gray-200 leading-relaxed'>
                        <strong>Korzyści:</strong> {exercise.benefits}
                     </p>
                  )}
               </li>
            ))}
         </ol>

         {/* Sugerowany plan treningu */}
         <h2 className='text-xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200'>
            Sugerowany Układ Treningu Core
         </h2>
         <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 leading-relaxed'>
            <li>Plank – 30-60 sekund.</li>
            <li>Side Plank – 30-45 sekund na każdą stronę.</li>
            <li>Russian Twists – 20-30 powtórzeń.</li>
            <li>Dead Bug – 10-12 powtórzeń na stronę.</li>
            <li>Bird Dog – 10-12 powtórzeń na stronę.</li>
            <li>Leg Raises – 10-15 powtórzeń.</li>
            <li>Mountain Climbers – 30 sekund lub 20-30 powtórzeń.</li>
         </ul>
      </div>
   );
};

export default Core;

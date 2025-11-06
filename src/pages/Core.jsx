import React, { useEffect, useState } from "react";
import coreExercisesData from "../data/coreExercises.json";

const Core = () => {
   const [exercises, setExercises] = useState([]);

   useEffect(() => {
      setExercises(coreExercisesData);
   }, []);

   return (
      <div className='core-container max-w-4xl mx-auto px-4 py-6'>
         <h1 className='text-2xl font-bold mb-6 text-gray-800'>
            Zestaw Ćwiczeń Wzmacniających Core
         </h1>

         <ol className='space-y-6'>
            {exercises.map((exercise, index) => (
               <li
                  key={index}
                  className='p-4 rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-200'
               >
                  <h2 className='text-xl font-semibold text-gray-700 mb-2'>
                     {exercise.title}
                  </h2>
                  <p className='text-gray-600 mb-1'>
                     <strong>Jak wykonać:</strong> {exercise.description}
                  </p>
                  {exercise.time && (
                     <p className='text-gray-600 mb-1'>
                        <strong>Czas:</strong> {exercise.time}
                     </p>
                  )}
                  {exercise.repetitions && (
                     <p className='text-gray-600 mb-1'>
                        <strong>Powtórzenia:</strong> {exercise.repetitions}
                     </p>
                  )}
                  {exercise.time_or_repetitions && (
                     <p className='text-gray-600 mb-1'>
                        <strong>Czas lub powtórzenia:</strong>{" "}
                        {exercise.time_or_repetitions}
                     </p>
                  )}
                  {exercise.benefits && (
                     <p className='text-gray-600'>
                        <strong>Korzyści:</strong> {exercise.benefits}
                     </p>
                  )}
               </li>
            ))}
         </ol>

         <h2 className='text-xl font-semibold mt-8 mb-4 text-gray-800'>
            Sugerowany Układ Treningu Core
         </h2>
         <ul className='list-disc list-inside space-y-2 text-gray-600'>
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

import React, { useEffect, useState } from "react";
import stretchingExercisesData from "../data/stretching.json";

const Stretching = () => {
   const [exercises, setExercises] = useState([]);

   useEffect(() => {
      setExercises(stretchingExercisesData);
   }, []);

   return (
      <div className='stretching-container max-w-4xl mx-auto px-4 py-6'>
         <h1 className='text-2xl font-bold mb-6 text-gray-800'>
            Ćwiczenia Rozciągające po Bieganiu
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
               </li>
            ))}
         </ol>

         <h2 className='text-xl font-semibold mt-8 mb-4 text-gray-800'>
            Dodatkowe Wskazówki
         </h2>
         <ul className='list-disc list-inside space-y-2 text-gray-600'>
            <li>
               Oddychaj głęboko: Utrzymuj spokojny oddech podczas każdego
               rozciągania.
            </li>
            <li>Nie spiesz się: Pamiętaj o kontrolowanym ruchu.</li>
            <li>
               Słuchaj swojego ciała: Jeżeli poczujesz ból, zmniejsz
               intensywność rozciągania.
            </li>
         </ul>
      </div>
   );
};

export default Stretching;

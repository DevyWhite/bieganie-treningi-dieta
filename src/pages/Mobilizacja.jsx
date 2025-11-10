import React, { useEffect, useState } from "react";
import mobilizacjaData from "../data/mobilizacja.json";

const Mobilizacja = () => {
   const [sections, setSections] = useState([]);

   useEffect(() => {
      setSections(mobilizacjaData);
   }, []);

   return (
      <div className='mobilizacja-container max-w-4xl mx-auto px-4 py-6'>
         <h1 className='text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200'>
            Zestaw Ćwiczeń Mobilizacyjnych
         </h1>

         {sections.map((section, index) => (
            <div className='mobilizacja-section mb-8' key={index}>
               <h2 className='text-xl font-semibold mb-4 text-gray-700'>
                  {section.title}
               </h2>
               <ol className='space-y-4'>
                  {section.exercises.map((exercise, i) => (
                     <li
                        key={i}
                        className='p-4 rounded-lg bg-white dark:bg-gray-800 shadow dark:shadow-gray-700 hover:shadow-md transition-shadow duration-200'
                     >
                        <h3 className='text-lg font-semibold text-gray-700 mb-1'>
                           {exercise.title}
                        </h3>
                        <p className='text-gray-600 mb-1'>
                           <strong>Cel:</strong> {exercise.goal}
                        </p>
                        <p className='text-gray-600 mb-1'>
                           <strong>Jak wykonać:</strong> {exercise.execution}
                        </p>
                        {exercise.duration && (
                           <p className='text-gray-600 mb-1'>
                              <strong>Czas:</strong> {exercise.duration}
                           </p>
                        )}
                        {exercise.repetitions && (
                           <p className='text-gray-600'>
                              <strong>Powtórzenia:</strong>{" "}
                              {exercise.repetitions}
                           </p>
                        )}
                     </li>
                  ))}
               </ol>
            </div>
         ))}

         <h2 className='text-xl font-semibold mb-4 text-gray-800'>
            Plan wykonania ćwiczeń mobilizacyjnych
         </h2>
         <ul className='list-disc list-inside space-y-2 text-gray-600'>
            <li>
               Przed bieganiem – Wybierz ćwiczenia dynamiczne (skipy, krążenia
               biodrami, wspięcia na palce, przysiady sumo, krążenia kostkami).
            </li>
            <li>
               Po bieganiu – Wybierz ćwiczenia statyczne (rozciąganie łydek,
               czworogłowych, bioder, pośladków i tyłu nóg).
            </li>
            <li>
               Dni nietreningowe – Wybierz kilka z powyższych, aby zachować
               elastyczność mięśni i stawów.
            </li>
         </ul>
      </div>
   );
};

export default Mobilizacja;

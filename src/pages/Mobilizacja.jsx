import React, { useEffect, useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import mobilizacjaData from "../data/mobilizacja.json";

const Mobilizacja = () => {
   const [sections, setSections] = useState([]);
   usePageTitle("Mobilizacja");

   useEffect(() => {
      setSections(mobilizacjaData);
   }, []);

   return (
      <div className='max-w-4xl mx-auto px-4 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen'>
         {/* Nagłówek */}
         <h1 className='text-2xl sm:text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100'>
            🧘‍♀️ Zestaw Ćwiczeń Mobilizacyjnych
         </h1>

         {/* Sekcje ćwiczeń */}
         {sections.map((section, index) => (
            <div
               key={index}
               className='mb-10 border-b border-gray-200 dark:border-gray-700 pb-6'
            >
               <h2 className='text-xl sm:text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400'>
                  {section.title}
               </h2>

               <ol className='flex flex-col gap-6'>
                  {section.exercises.map((exercise, i) => (
                     <li
                        key={i}
                        className='rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 transition-all duration-300'
                     >
                        <div className='p-5 sm:p-6'>
                           <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 text-left'>
                              {exercise.title}
                           </h3>

                           <div className='text-gray-700 dark:text-gray-300 text-left'>
                              {exercise.goal && (
                                 <p>
                                    <strong className='text-gray-900 dark:text-gray-200 text-left'>
                                       Cel:
                                    </strong>{" "}
                                    {exercise.goal}
                                 </p>
                              )}
                              {exercise.execution && (
                                 <p>
                                    <strong className='text-gray-900 dark:text-gray-200 text-left'>
                                       Jak wykonać:
                                    </strong>{" "}
                                    {exercise.execution}
                                 </p>
                              )}
                              {exercise.duration && (
                                 <p>
                                    <strong className='text-gray-900 dark:text-gray-200 text-left'>
                                       Czas:
                                    </strong>{" "}
                                    {exercise.duration}
                                 </p>
                              )}
                              {exercise.repetitions && (
                                 <p>
                                    <strong className='text-gray-900 dark:text-gray-200 text-left'>
                                       Powtórzenia:
                                    </strong>{" "}
                                    {exercise.repetitions}
                                 </p>
                              )}
                           </div>
                        </div>
                     </li>
                  ))}
               </ol>
            </div>
         ))}

         {/* Sekcja: plan wykonywania ćwiczeń */}
         <div className='mt-12'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>
               📅 Plan wykonania ćwiczeń mobilizacyjnych
            </h2>
            <ul className='list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed'>
               <li>
                  <strong>Przed bieganiem:</strong> wybierz ćwiczenia dynamiczne
                  (skipy, krążenia biodrami, wspięcia na palce, przysiady sumo,
                  krążenia kostkami).
               </li>
               <li>
                  <strong>Po bieganiu:</strong> skup się na ćwiczeniach
                  statycznych (rozciąganie łydek, czworogłowych, bioder,
                  pośladków i tyłu nóg).
               </li>
               <li>
                  <strong>Dni nietreningowe:</strong> wybierz kilka z
                  powyższych, aby zachować elastyczność mięśni i stawów.
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Mobilizacja;

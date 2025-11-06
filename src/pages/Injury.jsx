import React, { useEffect, useState } from "react";
import injuryData from "../data/injury.json";

const Injury = () => {
   const [injuryInfo, setInjuryInfo] = useState([]);

   useEffect(() => {
      setInjuryInfo(injuryData);
   }, []);

   if (injuryInfo.length === 0) {
      return (
         <div className='text-center py-6'>
            Nie znaleziono danych o kontuzji.
         </div>
      );
   }

   return (
      <div className='max-w-5xl mx-auto px-4 py-6 space-y-6'>
         {injuryInfo.map((injury) => (
            <div
               key={injury.id}
               id={injury.id}
               className='bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-200'
            >
               {/* Tytuł i opis */}
               <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                  {injury.title}
               </h2>
               <p className='text-gray-600 mb-4'>{injury.description}</p>

               {/* Sekcja ćwiczeń */}
               <h3 className='text-xl font-semibold text-gray-700 mb-2'>
                  Ćwiczenia:
               </h3>
               {injury.exercises && injury.exercises.length > 0 ? (
                  <div className='space-y-4'>
                     {injury.exercises.map((exercise, index) => {
                        if (exercise.category) {
                           return (
                              <div key={index} className='space-y-2'>
                                 <h4 className='font-semibold text-gray-700'>
                                    {exercise.category}
                                 </h4>
                                 {exercise.instructions && (
                                    <p className='text-gray-600'>
                                       {exercise.instructions}
                                    </p>
                                 )}
                                 {exercise.types &&
                                    exercise.types.map((type, typeIndex) => (
                                       <div
                                          key={typeIndex}
                                          className='pl-4 space-y-1'
                                       >
                                          <h5 className='font-medium text-gray-700'>
                                             {type.subcategory}
                                          </h5>
                                          <ul className='list-disc list-inside space-y-1 text-gray-600'>
                                             {type.exercises.map(
                                                (ex, exIndex) => (
                                                   <li key={exIndex}>
                                                      <strong>
                                                         {ex.title}
                                                      </strong>
                                                      : {ex.description}{" "}
                                                      {ex.repetitions && (
                                                         <em>
                                                            {ex.repetitions}
                                                         </em>
                                                      )}
                                                   </li>
                                                )
                                             )}
                                          </ul>
                                       </div>
                                    ))}
                              </div>
                           );
                        } else {
                           return (
                              <ul
                                 key={index}
                                 className='list-disc list-inside text-gray-600'
                              >
                                 <li>
                                    <strong>{exercise.title}</strong>{" "}
                                    {exercise.description}{" "}
                                    {exercise.series && (
                                       <span>Serie: {exercise.series}</span>
                                    )}{" "}
                                    {exercise.repetitions && (
                                       <span>
                                          Powtórzenia: {exercise.repetitions}
                                       </span>
                                    )}
                                 </li>
                              </ul>
                           );
                        }
                     })}
                  </div>
               ) : (
                  <p className='text-gray-500'>Brak ćwiczeń do wyświetlenia.</p>
               )}

               {/* Sekcja stretching */}
               <h3 className='text-xl font-semibold text-gray-700 mt-4 mb-2'>
                  Stretching:
               </h3>
               {injury.stretching && injury.stretching.length > 0 ? (
                  <ul className='list-disc list-inside space-y-1 text-gray-600'>
                     {injury.stretching.map((stretch, index) => (
                        <li key={index}>
                           <strong>{stretch.title}</strong>:{" "}
                           {stretch.description}{" "}
                           {stretch.duration && <em>{stretch.duration}</em>}
                        </li>
                     ))}
                  </ul>
               ) : (
                  <p className='text-gray-500'>
                     Brak rozciągania do wyświetlenia.
                  </p>
               )}

               {/* Sekcja wskazówek */}
               <h3 className='text-xl font-semibold text-gray-700 mt-4 mb-2'>
                  Porady:
               </h3>
               {injury.tips && injury.tips.length > 0 ? (
                  <ul className='list-disc list-inside space-y-1 text-gray-600'>
                     {injury.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                     ))}
                  </ul>
               ) : (
                  <p className='text-gray-500'>
                     Brak wskazówek do wyświetlenia.
                  </p>
               )}

               {/* Sekcja uwag */}
               {injury.note && (
                  <div className='mt-4'>
                     <h3 className='text-xl font-semibold text-gray-700 mb-1'>
                        Uwagi:
                     </h3>
                     <p className='text-gray-600'>{injury.note}</p>
                  </div>
               )}
            </div>
         ))}
      </div>
   );
};

export default Injury;

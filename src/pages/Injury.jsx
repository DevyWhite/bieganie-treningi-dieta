import React, { useEffect, useState } from "react";
import injuryData from "../data/injury.json";
import "../styles/Injury.css";

const Injury = () => {
   const [injuryInfo, setInjuryInfo] = useState({});

   useEffect(() => {
      setInjuryInfo(injuryData);
   }, []);

   if (!injuryInfo.title) return null;

   return (
      <div className='injury-container'>
         <h1 className='injury-title'>{injuryInfo.title}</h1>
         <p className='injury-description'>{injuryInfo.description}</p>

         {injuryInfo.exercises &&
            injuryInfo.exercises.map((section, index) => (
               <div key={index} className='injury-section'>
                  <h2 className='injury-section-title'>{section.category}</h2>

                  {/* Jeśli to instrukcje wstępne */}
                  {section.instructions && (
                     <p className='injury-section-instructions'>
                        {section.instructions}
                     </p>
                  )}

                  {/* Jeśli są podsekcje z różnymi typami ćwiczeń */}
                  {section.types &&
                     section.types.map((type, typeIndex) => (
                        <div key={typeIndex} className='injury-subsection'>
                           <h3 className='injury-subsection-title'>
                              {type.subcategory}
                           </h3>
                           <ul className='injury-exercises-list'>
                              {type.exercises.map((exercise, exIndex) => (
                                 <li
                                    key={exIndex}
                                    className='injury-exercise-item'
                                 >
                                    <h4 className='injury-exercise-title'>
                                       {exercise.title}
                                    </h4>
                                    <p className='injury-exercise-description'>
                                       {exercise.description}
                                    </p>
                                    {exercise.repetitions && (
                                       <p className='injury-exercise-repetitions'>
                                          <strong>Powtórzenia:</strong>{" "}
                                          {exercise.repetitions}
                                       </p>
                                    )}
                                    {exercise.time && (
                                       <p className='injury-exercise-time'>
                                          <strong>Czas:</strong> {exercise.time}
                                       </p>
                                    )}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}

                  {/* Jeśli sekcja zawiera ćwiczenia bez podsekcji */}
                  {section.exercises &&
                     section.exercises.map((exercise, exIndex) => (
                        <div key={exIndex} className='injury-exercise-item'>
                           <h4 className='injury-exercise-title'>
                              {exercise.title}
                           </h4>
                           <p className='injury-exercise-description'>
                              {exercise.description}
                           </p>
                           {exercise.repetitions && (
                              <p className='injury-exercise-repetitions'>
                                 <strong>Powtórzenia:</strong>{" "}
                                 {exercise.repetitions}
                              </p>
                           )}
                           {exercise.time && (
                              <p className='injury-exercise-time'>
                                 <strong>Czas:</strong> {exercise.time}
                              </p>
                           )}
                        </div>
                     ))}
               </div>
            ))}

         {/* Uwagi na temat ćwiczeń */}
         {injuryInfo.note && (
            <p className='injury-note'>
               <strong>Uwagi:</strong> {injuryInfo.note}
            </p>
         )}
      </div>
   );
};

export default Injury;

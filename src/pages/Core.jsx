import React, { useEffect, useState } from "react";
import coreExercisesData from "../data/coreExercises.json";
import "../styles/Core.css";

const Core = () => {
   const [exercises, setExercises] = useState([]);

   useEffect(() => {
      setExercises(coreExercisesData);
   }, []);

   return (
      <div className='core-container'>
         <h1 className='core-title'>Zestaw Ćwiczeń Wzmacniających Core</h1>
         <ol className='core-exercises-list'>
            {exercises.map((exercise, index) => (
               <li className='core-exercise-item' key={index}>
                  <h2 className='core-exercise-title'>{exercise.title}</h2>
                  <p className='core-exercise-description'>
                     <strong>Jak wykonać:</strong> {exercise.description}
                  </p>
                  {exercise.time && (
                     <p className='core-exercise-time'>
                        <strong>Czas:</strong> {exercise.time}
                     </p>
                  )}
                  {exercise.repetitions && (
                     <p className='core-exercise-repetitions'>
                        <strong>Powtórzenia:</strong> {exercise.repetitions}
                     </p>
                  )}
                  {exercise.time_or_repetitions && (
                     <p className='core-exercise-time-or-repetitions'>
                        <strong>Czas lub powtórzenia:</strong>{" "}
                        {exercise.time_or_repetitions}
                     </p>
                  )}
                  <p className='core-exercise-benefits'>
                     <strong>Korzyści:</strong> {exercise.benefits}
                  </p>
               </li>
            ))}
         </ol>

         <h2 className='core-training-suggestion-title'>
            Sugerowany Układ Treningu Core
         </h2>
         <ul className='core-training-suggestion-list'>
            <li className='core-training-suggestion-item'>
               Plank – 30-60 sekund.
            </li>
            <li className='core-training-suggestion-item'>
               Side Plank – 30-45 sekund na każdą stronę.
            </li>
            <li className='core-training-suggestion-item'>
               Russian Twists – 20-30 powtórzeń.
            </li>
            <li className='core-training-suggestion-item'>
               Dead Bug – 10-12 powtórzeń na stronę.
            </li>
            <li className='core-training-suggestion-item'>
               Bird Dog – 10-12 powtórzeń na stronę.
            </li>
            <li className='core-training-suggestion-item'>
               Leg Raises – 10-15 powtórzeń.
            </li>
            <li className='core-training-suggestion-item'>
               Mountain Climbers – 30 sekund lub 20-30 powtórzeń.
            </li>
         </ul>
      </div>
   );
};

export default Core;

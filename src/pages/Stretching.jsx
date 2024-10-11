import React, { useEffect, useState } from "react";
import stretchingExercisesData from "../data/stretching.json"; // Ścieżka do pliku JSON
import "../styles/Stretching.css"; // Stylizacja

const Stretching = () => {
   const [exercises, setExercises] = useState([]);

   useEffect(() => {
      setExercises(stretchingExercisesData);
   }, []);

   return (
      <div className='stretching-container'>
         <h1 className='stretching-title'>
            Ćwiczenia Rozciągające po Bieganiu
         </h1>
         <ol className='stretching-exercises-list'>
            {exercises.map((exercise, index) => (
               <li className='stretching-exercise-item' key={index}>
                  <h2 className='stretching-exercise-title'>
                     {exercise.title}
                  </h2>
                  <p className='stretching-exercise-description'>
                     <strong>Jak wykonać:</strong> {exercise.description}
                  </p>
                  {exercise.time && (
                     <p className='stretching-exercise-time'>
                        <strong>Czas:</strong> {exercise.time}
                     </p>
                  )}
                  {exercise.repetitions && (
                     <p className='stretching-exercise-repetitions'>
                        <strong>Powtórzenia:</strong> {exercise.repetitions}
                     </p>
                  )}
                  {exercise.time_or_repetitions && (
                     <p className='stretching-exercise-time-or-repetitions'>
                        <strong>Czas lub powtórzenia:</strong>{" "}
                        {exercise.time_or_repetitions}
                     </p>
                  )}
               </li>
            ))}
         </ol>

         <h2 className='stretching-tips-title'>Dodatkowe Wskazówki</h2>
         <ul className='stretching-tips-list'>
            <li className='stretching-tip-item'>
               Oddychaj głęboko: Utrzymuj spokojny oddech podczas każdego
               rozciągania.
            </li>
            <li className='stretching-tip-item'>
               Nie spiesz się: Pamiętaj o kontrolowanym ruchu.
            </li>
            <li className='stretching-tip-item'>
               Słuchaj swojego ciała: Jeżeli poczujesz ból, zmniejsz
               intensywność rozciągania.
            </li>
         </ul>
      </div>
   );
};

export default Stretching;

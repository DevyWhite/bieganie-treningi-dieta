import React, { useEffect, useState } from "react";
import mobilizacjaData from "../data/mobilizacja.json";
import "../styles/Mobilizacja.css";

const Mobilizacja = () => {
   const [sections, setSections] = useState([]);

   useEffect(() => {
      setSections(mobilizacjaData);
   }, []);

   return (
      <div className='mobilizacja-container'>
         <h1 className='mobilizacja-title'>Zestaw Ćwiczeń Mobilizacyjnych</h1>

         {sections.map((section, index) => (
            <div className='mobilizacja-section' key={index}>
               <h2 className='mobilizacja-section-title'>{section.title}</h2>
               <ol className='mobilizacja-exercises-list'>
                  {section.exercises.map((exercise, i) => (
                     <li className='mobilizacja-exercise-item' key={i}>
                        <h3 className='mobilizacja-exercise-title'>
                           {exercise.title}
                        </h3>
                        <p className='mobilizacja-exercise-goal'>
                           <strong>Cel:</strong> {exercise.goal}
                        </p>
                        <p className='mobilizacja-exercise-execution'>
                           <strong>Jak wykonać:</strong> {exercise.execution}
                        </p>
                        {exercise.duration && (
                           <p className='mobilizacja-exercise-duration'>
                              <strong>Czas:</strong> {exercise.duration}
                           </p>
                        )}
                        {exercise.repetitions && (
                           <p className='mobilizacja-exercise-repetitions'>
                              <strong>Powtórzenia:</strong>{" "}
                              {exercise.repetitions}
                           </p>
                        )}
                     </li>
                  ))}
               </ol>
            </div>
         ))}

         <h2 className='mobilizacja-plan-title'>
            Plan wykonania ćwiczeń mobilizacyjnych
         </h2>
         <ul className='mobilizacja-plan-list'>
            <li className='mobilizacja-plan-item'>
               Przed bieganiem – Wybierz ćwiczenia dynamiczne (skipy, krążenia
               biodrami, wspięcia na palce, przysiady sumo, krążenia kostkami).
            </li>
            <li className='mobilizacja-plan-item'>
               Po bieganiu – Wybierz ćwiczenia statyczne (rozciąganie łydek,
               czworogłowych, bioder, pośladków i tyłu nóg).
            </li>
            <li className='mobilizacja-plan-item'>
               Dni nietreningowe – Wybierz kilka z powyższych, aby zachować
               elastyczność mięśni i stawów.
            </li>
         </ul>
      </div>
   );
};

export default Mobilizacja;

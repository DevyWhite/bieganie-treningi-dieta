import React, { useState } from "react";
import "../styles/DrzewkoDni.css";

const DrzewkoDni = ({ dni }) => {
   // console.log(dni);
   const [rozwinieteDni, ustawRozwinieteDni] = useState([]);

   const toggleDzien = (index) => {
      if (rozwinieteDni.includes(index)) {
         ustawRozwinieteDni(rozwinieteDni.filter((i) => i !== index));
      } else {
         ustawRozwinieteDni([...rozwinieteDni, index]);
      }
   };

   return (
      <ul className='drzewko-dni'>
         {dni.map((dzien, index) => (
            <li key={index}>
               <button onClick={() => toggleDzien(index)}>
                  {rozwinieteDni.includes(index) ? "−" : "+"} {dzien.dzien}
               </button>
               {rozwinieteDni.includes(index) && (
                  <ul>
                     <li>
                        <strong>{dzien.opis}</strong>
                     </li>
                     {dzien.aktywnosc && (
                        <li>
                           <strong>Aktywność:</strong> {dzien.aktywnosc}
                        </li>
                     )}
                     {dzien.bieg && (
                        <li>
                           <strong>Bieg:</strong> {dzien.bieg}
                        </li>
                     )}
                     {dzien.cwiczenia && (
                        <li>
                           <strong>Ćwiczenia:</strong> {dzien.cwiczenia}
                        </li>
                     )}
                     {dzien.rozgrzewka && (
                        <li>
                           <strong>Rozgrzewka:</strong> {dzien.rozgrzewka}
                        </li>
                     )}
                     {dzien.interwaly && (
                        <li>
                           <strong>Interwały:</strong> {dzien.interwaly}
                        </li>
                     )}{" "}
                     {dzien.podbiegi && (
                        <li>
                           <strong>Podbiegi:</strong> {dzien.podbiegi}
                        </li>
                     )}
                     {dzien.chlodzenie && (
                        <li>
                           <strong>Chłodzenie:</strong> {dzien.chlodzenie}
                        </li>
                     )}
                     {dzien.mobilizacja && (
                        <li>
                           <strong>Mobilizacja:</strong> {dzien.mobilizacja}
                        </li>
                     )}
                     {dzien.stretching && (
                        <li>
                           <strong>Stretching:</strong> {dzien.stretching}
                        </li>
                     )}
                  </ul>
               )}
            </li>
         ))}
      </ul>
   );
};

export default DrzewkoDni;

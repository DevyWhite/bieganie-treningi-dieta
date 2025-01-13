import React, { useState } from "react";
import "../styles/DrzewkoDni.css";

const DrzewkoDni = ({ dni }) => {
   const [rozwinieteDni, ustawRozwinieteDni] = useState([]);

   const toggleDzien = (index) => {
      if (rozwinieteDni.includes(index)) {
         ustawRozwinieteDni(rozwinieteDni.filter((i) => i !== index));
      } else {
         ustawRozwinieteDni([...rozwinieteDni, index]);
      }
   };

   const renderWithNewLines = (text) => {
      if (!text) return;

      return text.split("\n").map((line, index) => (
         <span key={index} className='drzewko-dni-span'>
            {line}
            <br />
         </span>
      ));
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
                        <strong>{renderWithNewLines(dzien.opis)}</strong>
                     </li>
                     {dzien.aktywnosc && (
                        <li>
                           <strong>Aktywność:</strong>{" "}
                           {renderWithNewLines(dzien.aktywnosc)}
                        </li>
                     )}
                     {dzien.rozgrzewka && (
                        <li>
                           <strong>Rozgrzewka:</strong>{" "}
                           {renderWithNewLines(dzien.rozgrzewka)}
                        </li>
                     )}
                     {dzien.bieg && (
                        <li>
                           <strong>Bieg:</strong>{" "}
                           {renderWithNewLines(dzien.bieg)}
                        </li>
                     )}
                     {dzien.interwaly && (
                        <li>
                           <strong>Interwały:</strong>{" "}
                           {renderWithNewLines(dzien.interwaly)}
                        </li>
                     )}
                     {dzien.podbiegi && (
                        <li>
                           <strong>Podbiegi:</strong>{" "}
                           {renderWithNewLines(dzien.podbiegi)}
                        </li>
                     )}
                     {dzien.fartlek && (
                        <li>
                           <strong>Fartlek:</strong>{" "}
                           {renderWithNewLines(dzien.fartlek)}
                        </li>
                     )}
                     {dzien.chlodzenie && (
                        <li>
                           <strong>Chłodzenie:</strong>{" "}
                           {renderWithNewLines(dzien.chlodzenie)}
                        </li>
                     )}
                     {dzien.stretching && (
                        <li>
                           <strong>Stretching:</strong>{" "}
                           {renderWithNewLines(dzien.stretching)}
                        </li>
                     )}
                     {dzien.cwiczenia && (
                        <li>
                           <strong>Ćwiczenia:</strong>{" "}
                           {renderWithNewLines(dzien.cwiczenia)}
                        </li>
                     )}
                     {dzien.mobilizacja && (
                        <li>
                           <strong>Mobilizacja:</strong>{" "}
                           {renderWithNewLines(dzien.mobilizacja)}
                        </li>
                     )}
                     {dzien.cel && (
                        <li>
                           <strong>Cel:</strong> {renderWithNewLines(dzien.cel)}
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

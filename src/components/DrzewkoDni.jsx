import React, { useState } from "react";

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
      if (!text) return null;
      return text.split("\n").map((line, index) => (
         <span key={index} className='block'>
            {line}
         </span>
      ));
   };

   // Funkcja pomocnicza: obsługuje stringi i tablice
   const renderCwiczenia = (cwiczenia) => {
      if (!cwiczenia) return null;

      // Jeśli to tablica
      if (Array.isArray(cwiczenia)) {
         return (
            <ul className='list-disc list-inside space-y-1'>
               {cwiczenia.map((item, idx) => (
                  <li key={idx}>{item}</li>
               ))}
            </ul>
         );
      }

      // Jeśli to string - stare dane
      return renderWithNewLines(cwiczenia);
   };

   return (
      <ul className='space-y-3'>
         {dni.map((dzien, index) => (
            <li key={index}>
               <button
                  onClick={() => toggleDzien(index)}
                  className='w-full flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 font-medium text-gray-800 hover:bg-gray-200 transition-colors duration-200'
               >
                  <span>
                     {rozwinieteDni.includes(index) ? "−" : "+"} {dzien.dzien}
                  </span>
               </button>

               {rozwinieteDni.includes(index) && (
                  <div className='mt-2 p-4 bg-gray-50 rounded-lg shadow-inner space-y-2 text-gray-700'>
                     {dzien.opis && (
                        <p>
                           <strong>{renderWithNewLines(dzien.opis)}</strong>
                        </p>
                     )}
                     {dzien.rozgrzewka && (
                        <p>
                           <strong>Rozgrzewka:</strong>{" "}
                           {renderWithNewLines(dzien.rozgrzewka)}
                        </p>
                     )}
                     {dzien.aktywnosc && (
                        <p>
                           <strong>Aktywność:</strong>{" "}
                           {renderWithNewLines(dzien.aktywnosc)}
                        </p>
                     )}
                     {dzien.bieg && (
                        <p>
                           <strong>Bieg:</strong>{" "}
                           {renderWithNewLines(dzien.bieg)}
                        </p>
                     )}
                     {dzien.interwaly && (
                        <p>
                           <strong>Interwały:</strong>{" "}
                           {renderWithNewLines(dzien.interwaly)}
                        </p>
                     )}
                     {dzien.podbiegi && (
                        <p>
                           <strong>Podbiegi:</strong>{" "}
                           {renderWithNewLines(dzien.podbiegi)}
                        </p>
                     )}
                     {dzien.fartlek && (
                        <p>
                           <strong>Fartlek:</strong>{" "}
                           {renderWithNewLines(dzien.fartlek)}
                        </p>
                     )}
                     {dzien.chlodzenie && (
                        <p>
                           <strong>Chłodzenie:</strong>{" "}
                           {renderWithNewLines(dzien.chlodzenie)}
                        </p>
                     )}
                     {dzien.stretching && (
                        <p>
                           <strong>Stretching:</strong>{" "}
                           {renderWithNewLines(dzien.stretching)}
                        </p>
                     )}
                     {dzien.cwiczenia && (
                        <li>
                           <strong>Ćwiczenia:</strong>{" "}
                           {renderCwiczenia(dzien.cwiczenia)}
                        </li>
                     )}
                     {dzien.mobilizacja && (
                        <p>
                           <strong>Mobilizacja:</strong>{" "}
                           {renderWithNewLines(dzien.mobilizacja)}
                        </p>
                     )}
                     {dzien.cel && (
                        <p>
                           <strong>Cel:</strong> {renderWithNewLines(dzien.cel)}
                        </p>
                     )}
                  </div>
               )}
            </li>
         ))}
      </ul>
   );
};

export default DrzewkoDni;

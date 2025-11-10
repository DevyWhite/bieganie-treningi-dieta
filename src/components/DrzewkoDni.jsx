import React, { useState } from "react";

const DrzewkoDni = ({ dni }) => {
   const [rozwinieteDni, ustawRozwinieteDni] = useState([]);

   const toggleDzien = (index) => {
      ustawRozwinieteDni((prev) =>
         prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index]
      );
   };

   const renderWithNewLines = (text) => {
      if (!text) return null;
      return text.split("\n").map((line, index) => (
         <span key={index} className='block'>
            {line}
         </span>
      ));
   };

   const renderCwiczenia = (cwiczenia) => {
      if (!cwiczenia) return null;

      if (Array.isArray(cwiczenia)) {
         return (
            <ul className='list-disc list-inside space-y-1'>
               {cwiczenia.map((item, idx) => (
                  <li key={idx}>{item}</li>
               ))}
            </ul>
         );
      }

      return renderWithNewLines(cwiczenia);
   };

   return (
      <ul className='space-y-3'>
         {dni.map((dzien, index) => {
            const isOpen = rozwinieteDni.includes(index);
            return (
               <li key={index} className='transition-all duration-300'>
                  {/* Przycisk dnia */}
                  <button
                     onClick={() => toggleDzien(index)}
                     className={`w-full flex justify-between items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 
                        ${
                           isOpen
                              ? "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                  >
                     <span>
                        {isOpen ? "−" : "+"} {dzien.dzien}
                     </span>
                  </button>

                  {/* Zawartość dnia */}
                  <div
                     className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen
                           ? "max-h-[2000px] opacity-100 mt-2"
                           : "max-h-0 opacity-0"
                     }`}
                  >
                     <div className='p-4 rounded-lg bg-gray-50 dark:bg-gray-800/80 shadow-inner space-y-2 text-gray-700 dark:text-gray-200'>
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
                           <div>
                              <strong>Ćwiczenia:</strong>{" "}
                              {renderCwiczenia(dzien.cwiczenia)}
                           </div>
                        )}
                        {dzien.mobilizacja && (
                           <p>
                              <strong>Mobilizacja:</strong>{" "}
                              {renderWithNewLines(dzien.mobilizacja)}
                           </p>
                        )}
                        {dzien.cel && (
                           <p>
                              <strong>Cel:</strong>{" "}
                              {renderWithNewLines(dzien.cel)}
                           </p>
                        )}
                     </div>
                  </div>
               </li>
            );
         })}
      </ul>
   );
};

export default DrzewkoDni;

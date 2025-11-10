import React from "react";

const MenuNawigacyjne = ({ tygodnie, ustawTydzien, aktywnyTydzien }) => {
   return (
      <nav className='flex flex-wrap justify-center gap-2 mt-4'>
         {tygodnie.map((_, index) => {
            const isActive = index === aktywnyTydzien;

            return (
               <button
                  key={index}
                  onClick={() => ustawTydzien(index)}
                  className={`
                     px-4 py-2 rounded-lg font-medium 
                     transition-all duration-200 ease-in-out
                     border
                     ${
                        isActive
                           ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-400 shadow-md"
                           : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
                     }
                  `}
               >
                  Tydzień {index + 1}
               </button>
            );
         })}
      </nav>
   );
};

export default MenuNawigacyjne;

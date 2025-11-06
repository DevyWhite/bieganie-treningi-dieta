import React from "react";

const MenuNawigacyjne = ({ tygodnie, ustawTydzien, aktywnyTydzien }) => {
   return (
      <nav className='flex flex-wrap gap-2 mt-4'>
         {tygodnie.map((_, index) => {
            const isActive = index === aktywnyTydzien;
            return (
               <button
                  key={index}
                  onClick={() => ustawTydzien(index)}
                  className={`
                     px-4 py-2 rounded-lg font-medium transition-colors duration-200
                     ${
                        isActive
                           ? "bg-blue-500 text-white"
                           : "bg-gray-300 text-gray-800 hover:bg-gray-400"
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

import React from "react";
import "../styles/MenuNawigacyjne.css";

const MenuNawigacyjne = ({ tygodnie, ustawTydzien }) => {
   return (
      <nav>
         <ul className='menu-nawigacyjne'>
            {tygodnie.map((_, index) => (
               <li key={index}>
                  <button onClick={() => ustawTydzien(index)}>
                     Tydzień {index + 1}
                  </button>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default MenuNawigacyjne;

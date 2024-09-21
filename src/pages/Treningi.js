import React, { useState } from "react";
import MenuNawigacyjne from "../components/MenuNawigacyjne";
import DrzewkoDni from "../components/DrzewkoDni";
import "../styles/Treningi.css";
import treningiTygodnie from "../data/treningiTygodnie.json";

const Treningi = () => {
   const [aktywnyTydzien, ustawAktywnyTydzien] = useState(0);

   return (
      <div className='treningi-container'>
         <h1>Plan Treningowy - Tydzień {aktywnyTydzien + 1}</h1>
         <MenuNawigacyjne
            tygodnie={treningiTygodnie}
            ustawTydzien={ustawAktywnyTydzien}
         />
         <DrzewkoDni dni={treningiTygodnie[aktywnyTydzien]} />
      </div>
   );
};

export default Treningi;

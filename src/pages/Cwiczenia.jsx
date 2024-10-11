import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Cwiczenia.css";

const Cwiczenia = () => {
   return (
      <div className='cwiczenia-container'>
         <nav className='cwiczenia-nav'>
            <ul className='cwiczenia-nav-list'>
               <li className='cwiczenia-nav-item'>
                  <Link to='stretching' className='cwiczenia-nav-link'>
                     Stretching
                  </Link>
               </li>
               <li className='cwiczenia-nav-item'>
                  <Link to='core' className='cwiczenia-nav-link'>
                     Core
                  </Link>
               </li>
            </ul>
         </nav>
         <Outlet />
      </div>
   );
};

export default Cwiczenia;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Cwiczenia.css";

const Cwiczenia = () => {
   return (
      <div className='cwiczenia-container'>
         <nav className='cwiczenia-nav'>
            <ul className='cwiczenia-nav-list'>
               <li className='cwiczenia-nav-item'>
                  <NavLink
                     to='stretching'
                     className={({ isActive }) =>
                        isActive
                           ? "cwiczenia-nav-link-active"
                           : "cwiczenia-nav-link"
                     }
                  >
                     Stretching
                  </NavLink>
               </li>
               <li className='cwiczenia-nav-item'>
                  <NavLink
                     to='core'
                     className={({ isActive }) =>
                        isActive
                           ? "cwiczenia-nav-link-active"
                           : "cwiczenia-nav-link"
                     }
                  >
                     Core
                  </NavLink>
               </li>
               <li className='cwiczenia-nav-item'>
                  <NavLink
                     to='mobilizacja'
                     className={({ isActive }) =>
                        isActive
                           ? "cwiczenia-nav-link-active"
                           : "cwiczenia-nav-link"
                     }
                  >
                     Mobilizacja
                  </NavLink>
               </li>
               <li className='cwiczenia-nav-item'>
                  <NavLink
                     to='kontuzje'
                     className={({ isActive }) =>
                        isActive
                           ? "cwiczenia-nav-link-active"
                           : "cwiczenia-nav-link"
                     }
                  >
                     Kontuzje
                  </NavLink>
               </li>
            </ul>
         </nav>
         <Outlet />
      </div>
   );
};

export default Cwiczenia;

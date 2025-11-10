import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

const Cwiczenia = () => {
   usePageTitle("Ćwiczenia");

   const navItems = [
      { name: "Stretching", path: "stretching" },
      { name: "Core", path: "core" },
      { name: "Mobilizacja", path: "mobilizacja" },
      { name: "Kontuzje", path: "kontuzje" },
   ];

   return (
      <div className='cwiczenia-container transition-colors duration-300'>
         <nav className='mb-4'>
            <ul className='flex flex-wrap gap-2'>
               {navItems.map((item) => (
                  <li key={item.path}>
                     <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                           `px-4 py-2 rounded-lg font-medium transition-colors duration-200
                            ${
                               isActive
                                  ? "bg-emerald-700 dark:bg-emerald-500 text-white"
                                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`
                        }
                     >
                        {item.name}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </nav>

         <div className='cwiczenia-content'>
            <Outlet />
         </div>
      </div>
   );
};

export default Cwiczenia;

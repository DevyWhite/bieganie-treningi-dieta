import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Cwiczenia = () => {
   const navItems = [
      { name: "Stretching", path: "stretching" },
      { name: "Core", path: "core" },
      { name: "Mobilizacja", path: "mobilizacja" },
      { name: "Kontuzje", path: "kontuzje" },
   ];

   return (
      <div className='cwiczenia-container'>
         <nav className='mb-4'>
            <ul className='flex flex-wrap gap-2'>
               {navItems.map((item) => (
                  <li key={item.path}>
                     <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                           `px-4 py-2 rounded-lg transition-colors duration-200
                            ${
                               isActive
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ikony menu

const list = [
   { name: "Home", path: "/" },
   { name: "Trening", path: "/treningi" },
   { name: "Ćwiczenia", path: "/cwiczenia" },
   { name: "Zdrowie", path: "/zdrowie" },
   { name: "Przepisy", path: "/przepisy" },
   { name: "Szlaki", path: "/szlaki" },
   { name: "Projekty", path: "/projects" },
   { name: "Zawody", path: "/zawody-biegowe" },
   { name: "O mnie", path: "/o-mnie" },
];

const Navigation = () => {
   const [open, setOpen] = useState(false);

   return (
      <nav className='w-full'>
         {/* Przycisk mobilny */}
         <div className='md:hidden flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold tracking-tight'>Menu</h2>
            <button
               onClick={() => setOpen(!open)}
               className='text-gray-700 hover:text-gray-900'
            >
               {open ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>

         {/* Lista linków */}
         <ul
            className={`flex flex-col gap-2 transition-all duration-300 ${
               open ? "block" : "hidden"
            } md:flex md:gap-3`}
         >
            {list.map((item) => (
               <li key={item.name}>
                  <NavLink
                     to={item.path}
                     onClick={() => setOpen(false)} // zamknij menu po kliknięciu
                     className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg text-sm font-medium transition-colors
                        ${
                           isActive
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`
                     }
                  >
                     {item.name}
                  </NavLink>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navigation;

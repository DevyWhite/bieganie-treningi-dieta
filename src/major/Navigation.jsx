import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const list = [
   { name: "Home", path: "/" },
   { name: "Trening", path: "/treningi" },
   { name: "Ćwiczenia", path: "/cwiczenia" },
   { name: "Zdrowie", path: "/zdrowie" },
   { name: "Przepisy", path: "/przepisy" },
   { name: "Szlaki", path: "/szlaki" },
   { name: "Projekty", path: "/projects" },
   { name: "Artykuły", path: "/articles" },
   { name: "Zawody", path: "/zawody-biegowe" },
   { name: "O mnie", path: "/o-mnie" },
];

const Navigation = () => {
   const [open, setOpen] = useState(false);

   return (
      <nav className='w-full transition-colors duration-300'>
         {/* Przycisk mobilny */}
         <div className='md:hidden flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-200'>
               Menu
            </h2>

            <button
               onClick={() => setOpen(!open)}
               className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300'
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
                        `block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300
                        ${
                           isActive
                              ? "bg-emerald-100 text-emerald-700 dark:bg-gray-700 dark:text-emerald-400"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                        }`
                     }
                  >
                     {item.name}
                  </NavLink>
               </li>
            ))}
         </ul>

         {/* Przełącznik motywu (opcjonalnie w stopce menu) */}
         <div className='mt-4'>
            <DarkModeToggle />
         </div>
      </nav>
   );
};

export default Navigation;

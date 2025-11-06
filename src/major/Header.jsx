import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import img1 from "../images/heder/runer1.jpeg";
import img2 from "../images/heder/img2.jpg";
import img3 from "../images/heder/runer2.jpeg";

// Lista nagłówków i ścieżek
const list = [
   { name: "Trail w dzień, debug w nocy", path: "/" },
   { name: "Plan Treningowy", path: "/treningi" },
   { name: "Projekty", path: "/projects" },
   { name: "Przepisy", path: "/przepisy" },
   { name: "Zawody", path: "/zawody-biegowe" },
   { name: "Szlaki", path: "/szlaki" },
   { name: "Zdrowie", path: "/zdrowie" },
];

const Header = () => {
   const location = useLocation();

   const getImage = () => {
      switch (location.pathname) {
         case "/treningi":
            return img2;
         case "/zdrowie":
            return img3;
         case "/admin":
            return img1;
         default:
            return img3;
      }
   };

   const getHeaderText = () => {
      if (location.pathname.startsWith("/przepisy")) return "Przepisy";
      if (location.pathname.startsWith("/cwiczenia")) return "Ćwiczenia";

      const currentItem = list.find((item) => item.path === location.pathname);
      return currentItem ? currentItem.name : "Trail w dzień, debug w nocy";
   };

   return (
      <header className='relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-2xl shadow-sm'>
         {/* Zdjęcie w tle */}
         <Routes>
            <Route
               path='*'
               element={
                  <img
                     src={getImage()}
                     alt='header background'
                     className='absolute inset-0 w-full h-full object-cover object-center opacity-80'
                  />
               }
            />
         </Routes>

         {/* Nakładka z tytułem */}
         <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-center drop-shadow-lg'>
               {getHeaderText()}
            </h1>
         </div>
      </header>
   );
};

export default Header;

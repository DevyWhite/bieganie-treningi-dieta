import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/heder/runer1.jpeg";
import img2 from "../images/heder/img2.jpg";
import img3 from "../images/heder/runer2.jpeg";

// Lista komponentów
const list = [
   { name: "Witaj na stronie!", path: "/" },
   { name: "Plan Treningowy", path: "/treningi" },
   { name: "Dieta", path: "/dieta" },
   { name: "Przepisy", path: "/przepisy" },
   { name: "Zawody", path: "/zawody-biegowe" },
   { name: "Trasy", path: "/trasy-biegowe" },
   { name: "Apteczka", path: "/" },
];

const Header = () => {
   const location = useLocation();

   const getImage = () => {
      switch (location.pathname) {
         case "/treningi":
            return img2;
         case "/apteczka":
            return img3;
         case "/admin":
            return img1;
         default:
            return img3;
      }
   };

   const getHeaderText = () => {
      // Zwracamy "Przepisy", jeśli jesteśmy na stronie przepisów
      if (location.pathname.startsWith("/przepisy")) {
         return "Przepisy";
      }

      if (location.pathname.startsWith("/cwiczenia")) {
         return "Ćwiczenia";
      }

      const currentItem = list.find((item) => item.path === location.pathname);
      return currentItem ? currentItem.name : "Witaj na stronie!";
   };

   return (
      <header>
         <Routes>
            <Route path='*' element={<img src={getImage()} alt='header' />} />
         </Routes>
         <h1>{getHeaderText()}</h1>
      </header>
   );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
   { name: "Home", path: "/" },
   { name: "Trening", path: "/treningi" },
   { name: "Ćwiczenia", path: "/cwiczenia" },
   { name: "Zdrowie", path: "/zdrowie" },
   { name: "Przepisy", path: "/przepisy" },
   { name: "Szlaki", path: "/szlaki" },
   { name: "Projekty", path: "/projekty" },
   { name: "Zawody", path: "/zawody-biegowe" },
   { name: "O mnie", path: "/o-mnie" },
];

const Navigation = () => {
   const menu = list.map((item) => (
      <li key={item.name}>
         <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
         >
            {item.name}
         </NavLink>
      </li>
   ));

   return (
      <nav className='custom-nav'>
         <ul className='nav-list'>{menu}</ul>
      </nav>
   );
};

export default Navigation;

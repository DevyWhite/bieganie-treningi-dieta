import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
   { name: "Start", path: "/" },
   { name: "Plan treningowy", path: "/treningi" },
   { name: "Ćwiczenia", path: "/cwiczenia" },
   { name: "Dieta", path: "/dieta" },
   { name: "Przepisy", path: "/przepisy" },
   { name: "Zawody", path: "/zawody-biegowe" },
   { name: "Trasy", path: "/trasy-biegowe" },
   { name: "Apteczka", path: "/apteczka" },
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

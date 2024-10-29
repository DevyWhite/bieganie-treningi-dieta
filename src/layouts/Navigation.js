import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
   { name: "start", path: "/" },
   { name: "plan treningowy", path: "/treningi" },
   { name: "ćwiczenia", path: "/cwiczenia" },
   { name: "dieta", path: "/dieta" },
   { name: "przepisy", path: "/przepisy" },
   { name: "zawody", path: "/zawody-biegowe" },
   { name: "trasy", path: "/trasy-biegowe" },
   { name: "apteczka", path: "/apteczka" },
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

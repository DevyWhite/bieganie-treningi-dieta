import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
   { name: "start", path: "/" },
   { name: "plan treningowy", path: "/treningi" },
   { name: "dieta", path: "/dieta" },
   { name: "przepisy", path: "/przepisy" },
   { name: "zawody", path: "/zwody-biegowe" },
   { name: "trasy", path: "/trasy-biegowe" },
   { name: "apteczka", path: "/apteczka" },
];

const Navigation = () => {
   const menu = list.map((item) => (
      <li key={item.name}>
         <NavLink to={item.path} activeclassname='active'>
            {item.name}
         </NavLink>
      </li>
   ));

   return (
      <nav className='main'>
         <ul>{menu}</ul>
      </nav>
   );
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
   { name: "start", path: "/" },
   // { name: "produkty", path: "/products" },
   // { name: "kontakt", path: "/contact" },
   // { name: "panel admina", path: "/admin" },
   { name: "plan treningowy", path: "/treningi" },
   { name: "dieta", path: "/dieta" },
   { name: "przepisy", path: "/przepisy" },
   { name: "zawody", path: "/zwody-biegowe" },
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

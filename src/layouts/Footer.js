import React from "react";
import "../styles/Footer.css";

const Footer = () => {
   return (
      <div className='footer'>
         <h2>Moje Bieganie</h2>
         <p>Plan treningów biegowych, dieta, przepisy i planowane zawody</p>
         <div className='footer-info'>
            <p>
               &copy; {new Date().getFullYear()} Moje Bieganie. Wszystkie prawa
               zastrzeżone.
            </p>
         </div>
      </div>
   );
};

export default Footer;

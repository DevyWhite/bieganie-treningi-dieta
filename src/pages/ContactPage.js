import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
   const [message, setMessage] = useState("");

   const handleChange = (e) => {
      setMessage(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setMessage("");
   };

   const btnDisabled = !message;

   return (
      <div className='contact'>
         <form onSubmit={handleSubmit}>
            <h3>Napisz do nas</h3>
            <textarea
               value={message}
               onChange={handleChange}
               placeholder='Wpisz swoją wiadomość tutaj...'
            ></textarea>
            <button className='btnContact' disabled={btnDisabled} type='submit'>
               Wyślij
            </button>
         </form>
      </div>
   );
};

export default ContactPage;

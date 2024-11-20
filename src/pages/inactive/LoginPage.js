import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
   return (
      <div className='login-container'>
         <label>
            Login:
            <input type='text' />
         </label>
         <label>
            Hasło:
            <input type='password' />
         </label>
         <button className='btn btn-outline-primary'>Zaloguj</button>
      </div>
   );
};

export default LoginPage;

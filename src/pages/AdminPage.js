import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const permission = false;

const AdminPage = () => {
   const link = permission ? (
      <h3>Panel admina - yoł!</h3>
   ) : (
      <Navigate to='/login' />
   );
   return (
      <Routes>
         <Route path='/' element={link} />
      </Routes>
   );
};

export default AdminPage;

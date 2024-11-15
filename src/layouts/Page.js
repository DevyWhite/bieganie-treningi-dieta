import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

import Treningi from "../pages/Treningi";
import Dieta from "../pages/Dieta";
import Przepisy from "../pages/Przepisy";
import Apteczka from "../pages/Apteczka";
import ZawodyBiegowe from "../pages/ZawodyBiegowe";
import TrasyBiegowe from "../pages/TrasyBiegowe";

import RecipePage from "../pages/RecipePage";

import Cwiczenia from "../pages/Cwiczenia";
import Core from "../pages/Core";
import Stretching from "../pages/Stretching";
import Injury from "../pages/Injury";
import Mobilizacja from "../pages/Mobilizacja";

const Page = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage />} />

         <Route path='/contact' element={<ContactPage />} />
         <Route path='/admin/*' element={<AdminPage />} />
         <Route path='/login' element={<LoginPage />} />

         <Route path='/treningi' element={<Treningi />} />
         <Route path='/dieta' element={<Dieta />} />
         <Route path='/apteczka' element={<Apteczka />} />
         <Route path='/zawody-biegowe' element={<ZawodyBiegowe />} />
         <Route path='/trasy-biegowe' element={<TrasyBiegowe />} />

         {/* Strona główna dla listy przepisów */}
         <Route path='/przepisy' element={<Przepisy />} />

         {/* Dynamiczne strony przepisów */}
         <Route path='/przepisy/:recipeId' element={<RecipePage />} />

         {/* CWICZENIA */}
         <Route path='/cwiczenia' element={<Cwiczenia />}>
            <Route path='core' element={<Core />} />
            <Route path='stretching' element={<Stretching />} />
            <Route path='kontuzje' element={<Injury />} />
            <Route path='mobilizacja' element={<Mobilizacja />} />
         </Route>

         <Route path='*' element={<ErrorPage />} />
      </Routes>
   );
};

export default Page;

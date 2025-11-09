import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
// import ContactPage from "../pages/ContactPage";
// import AdminPage from "../pages/AdminPage";
// import LoginPage from "../pages/LoginPage";

import Treningi from "../pages/Treningi";
import Projects from "../pages/Projects";
import Przepisy from "../pages/Przepisy";
import Zdrowie from "../pages/Zdrowie";
import ZawodyBiegowe from "../pages/ZawodyBiegowe";
import Szlaki from "../pages/Szlaki";

import RecipePage from "../pages/RecipePage";
import ArticlePage from "../pages/ArticlePage";

import Cwiczenia from "../pages/Cwiczenia";
import Core from "../pages/Core";
import Stretching from "../pages/Stretching";
import Injury from "../pages/Injury";
import Mobilizacja from "../pages/Mobilizacja";
import ProjectDetails from "../pages/ProjectDetails";
import About from "../pages/About";

const Page = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage />} />

         {/* <Route path='/contact' element={<ContactPage />} /> */}
         {/* <Route path='/admin/*' element={<AdminPage />} /> */}
         {/* <Route path='/login' element={<LoginPage />} /> */}

         <Route path='/treningi' element={<Treningi />} />
         <Route path='/zdrowie' element={<Zdrowie />} />
         <Route path='/zawody-biegowe' element={<ZawodyBiegowe />} />
         <Route path='/szlaki' element={<Szlaki />} />

         {/* strona o mnie */}
         <Route path='/o-mnie' element={<About />} />

         {/* Strona główna dla listy przepisów */}
         <Route path='/przepisy' element={<Przepisy />} />

         {/* Dynamiczne strony przepisów */}
         <Route path='/przepisy/:recipeId' element={<RecipePage />} />

         {/* Dynamiczne strony artykułów */}
         <Route path='/article/:id' element={<ArticlePage />} />

         {/* CWICZENIA */}
         <Route path='/cwiczenia' element={<Cwiczenia />}>
            <Route path='core' element={<Core />} />
            <Route path='stretching' element={<Stretching />} />
            <Route path='kontuzje' element={<Injury />} />
            <Route path='mobilizacja' element={<Mobilizacja />} />
         </Route>

         {/* Projekty */}
         <Route path='/projects' element={<Projects />} />
         <Route path='/projects/:id' element={<ProjectDetails />} />

         <Route path='*' element={<ErrorPage />} />
      </Routes>
   );
};

export default Page;

import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductsPage from "../pages/ProductsPage";
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

import Batony from "../pages/Batony";
import PlackiBananowe from "../pages/PlackiBananowe";
import ChlebekBananowy from "../pages/ChlebekBananowy";
import PlackiBananoweCzekoladowe from "../pages/PlackiBananoweCzekoladowe";
import SernikBezCukru from "../pages/SernikBezCukru";
import KuleMocy from "../pages/KuleMocy";

const Page = () => {
   return (
      <Routes>
         <Route path='/' element={<HomePage />}></Route>
         <Route path='/products' element={<ProductListPage />}></Route>
         <Route path='/product/:id' element={<ProductsPage />}></Route>
         <Route path='/contact' element={<ContactPage />}></Route>
         <Route path='/admin/*' element={<AdminPage />}></Route>
         <Route path='/login' element={<LoginPage />}></Route>

         <Route path='/treningi' element={<Treningi />}></Route>
         <Route path='/dieta' element={<Dieta />}></Route>
         <Route path='/apteczka' element={<Apteczka />}></Route>
         <Route path='/zawody-biegowe' element={<ZawodyBiegowe />}></Route>
         <Route path='/trasy-biegowe' element={<TrasyBiegowe />}></Route>

         {/* PRZEPISY */}
         <Route path='/przepisy/batony' element={<Batony />} />
         <Route path='/przepisy/placki-bananowe' element={<PlackiBananowe />} />
         <Route
            path='/przepisy/chlebek-bananowy'
            element={<ChlebekBananowy />}
         />
         <Route
            path='/przepisy/placki-bananowe-czekoladowe'
            element={<PlackiBananoweCzekoladowe />}
         />
         <Route
            path='/przepisy/sernik-bez-cukru'
            element={<SernikBezCukru />}
         />
         <Route path='/przepisy/kule-mocy' element={<KuleMocy />} />
         <Route path='/przepisy/*' element={<Przepisy />} />

         <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
   );
};

export default Page;

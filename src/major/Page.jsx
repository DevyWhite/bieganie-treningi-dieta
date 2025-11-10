import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// 🔹 Lazy loading stron (lepsza wydajność)
const HomePage = lazy(() => import("../pages/HomePage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Treningi = lazy(() => import("../pages/Treningi"));
const Projects = lazy(() => import("../pages/Projects"));
const Przepisy = lazy(() => import("../pages/Przepisy"));
const Zdrowie = lazy(() => import("../pages/Zdrowie"));
const ZawodyBiegowe = lazy(() => import("../pages/ZawodyBiegowe"));
const Szlaki = lazy(() => import("../pages/Szlaki"));
const RecipePage = lazy(() => import("../pages/RecipePage"));
const ArticlePage = lazy(() => import("../pages/ArticlePage"));
const Cwiczenia = lazy(() => import("../pages/Cwiczenia"));
const Core = lazy(() => import("../pages/Core"));
const Stretching = lazy(() => import("../pages/Stretching"));
const Injury = lazy(() => import("../pages/Injury"));
const Mobilizacja = lazy(() => import("../pages/Mobilizacja"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));
const About = lazy(() => import("../pages/About"));

// 🔹 Prosty loader (fallback)
const Loader = () => (
   <div className='flex items-center justify-center min-h-[200px] text-gray-500 dark:text-gray-400 animate-pulse'>
      Ładowanie strony...
   </div>
);

const Page = () => {
   return (
      <Suspense fallback={<Loader />}>
         <Routes>
            {/* 🏡 Główna */}
            <Route path='/' element={<HomePage />} />

            {/* 🏃‍♂️ Treningi */}
            <Route path='/treningi' element={<Treningi />} />

            {/* ❤️ Zdrowie */}
            <Route path='/zdrowie' element={<Zdrowie />} />

            {/* 🏔️ Szlaki i zawody */}
            <Route path='/szlaki' element={<Szlaki />} />
            <Route path='/zawody-biegowe' element={<ZawodyBiegowe />} />

            {/* 👤 O mnie */}
            <Route path='/o-mnie' element={<About />} />

            {/* 🍲 Przepisy */}
            <Route path='/przepisy' element={<Przepisy />} />
            <Route path='/przepisy/:recipeId' element={<RecipePage />} />

            {/* 📘 Artykuły */}
            <Route path='/article/:id' element={<ArticlePage />} />

            {/* 🧘‍♀️ Ćwiczenia z podstronami */}
            <Route path='/cwiczenia' element={<Cwiczenia />}>
               <Route path='core' element={<Core />} />
               <Route path='stretching' element={<Stretching />} />
               <Route path='kontuzje' element={<Injury />} />
               <Route path='mobilizacja' element={<Mobilizacja />} />
            </Route>

            {/* 💻 Projekty */}
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetails />} />

            {/* 🚫 404 */}
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </Suspense>
   );
};

export default Page;

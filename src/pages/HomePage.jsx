import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

const HomePage = () => {
   const [articles, setArticles] = useState([]);
   usePageTitle("Strona główna");

   useEffect(() => {
      fetch("/data/running_articles.json")
         .then((response) => response.json())
         .then((data) => setArticles(data));
   }, []);

   const getRandomArticles = (articles, count) => {
      const shuffled = [...articles].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
   };

   const randomArticles = getRandomArticles(articles, 6);

   return (
      <div className='py-8 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen'>
         {/* Nagłówek */}
         <h1 className='text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100 tracking-tight'>
            🏃‍♂️ Najnowsze artykuły
         </h1>

         {/* Siatka artykułów */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {randomArticles.map((article) => (
               <div
                  key={article.id}
                  className='bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm rounded-xl p-5 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-gray-600 hover:-translate-y-1 transition-all duration-300'
               >
                  <div>
                     <h3 className='text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200'>
                        {article.title}
                     </h3>

                     <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                        Autor: {article.author}
                     </p>

                     {/* Homepage thumbnail image: optimized at ~400px width and fixed 192px height */}
                     {article.image && (
                        <div className='relative w-full h-48 overflow-hidden rounded-lg mb-4 group'>
                           <img
                              src={article.image}
                              alt={article.title}
                              className='object-cover w-full h-full rounded-lg transform group-hover:scale-110 transition-transform duration-500'
                           />
                           <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center'>
                              <span className='text-white opacity-0 group-hover:opacity-100 text-sm tracking-wide transition-opacity duration-500'>
                                 Zobacz artykuł
                              </span>
                           </div>
                        </div>
                     )}

                     {article.excerpt && (
                        <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-left'>
                           {article.excerpt.replace(/\s+/g, " ").trim()}
                        </p>
                     )}
                  </div>

                  {/* Przycisk */}
                  <Link
                     to={`/article/${article.id}`}
                     className='mt-auto inline-block bg-emerald-600 dark:bg-emerald-500 text-white text-center py-2 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-400 transition-all duration-300'
                  >
                     Czytaj więcej
                  </Link>
               </div>
            ))}
         </div>
         <div className='text-center mt-8'>
            <Link
               to='/articles'
               className='inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300'
            >
               Zobacz wszystkie artykuły
            </Link>
         </div>
      </div>
   );
};

export default HomePage;

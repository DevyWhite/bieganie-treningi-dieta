import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

const ArticlesListPage = () => {
   const [articles, setArticles] = useState([]);
   usePageTitle("Wszystkie artykuły");

   useEffect(() => {
      fetch("/data/running_articles.json")
         .then((response) => response.json())
         .then((data) => setArticles(data));
   }, []);

   if (!articles.length) {
      return (
         <div className='flex items-center justify-center min-h-[50vh] text-gray-500 dark:text-gray-400 animate-pulse'>
            Ładowanie artykułów...
         </div>
      );
   }

   return (
      <div className='max-w-6xl mx-auto px-4 py-10 transition-colors duration-300'>
         <h1 className='text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200'>
            Wszystkie artykuły 📰
         </h1>

         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {articles.map((article) => (
               <Link
                  to={`/article/${article.id}`}
                  key={article.id}
                  className='bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col'
               >
                  {article.image && (
                     <div className='h-48 w-full overflow-hidden'>
                        <img
                           src={article.image}
                           alt={article.title}
                           className='object-cover w-full h-full rounded-t-xl transition-transform duration-500 hover:scale-105'
                        />
                     </div>
                  )}

                  <div className='flex-1 flex flex-col p-5'>
                     <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                        {article.title}
                     </h2>
                     <p className='text-sm text-gray-400 dark:text-gray-400 mb-4'>
                        Autor: {article.author}
                     </p>
                     {article.excerpt && (
                        <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 leading-relaxed'>
                           {article.excerpt}
                        </p>
                     )}
                     <span className='mt-auto inline-block bg-emerald-700 dark:bg-emerald-500 text-white text-center py-2 rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors duration-300'>
                        Czytaj więcej
                     </span>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default ArticlesListPage;

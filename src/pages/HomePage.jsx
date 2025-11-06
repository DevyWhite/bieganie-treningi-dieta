import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
   const [articles, setArticles] = useState([]);

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
      <div className='py-8 px-4'>
         <h1 className='text-3xl font-semibold text-center mb-10 text-gray-800'>
            Najnowsze artykuły
         </h1>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {randomArticles.map((article) => (
               <div
                  key={article.id}
                  className='bg-white shadow-sm rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300'
               >
                  <div>
                     <h3 className='text-xl font-semibold mb-2 text-gray-700'>
                        {article.title}
                     </h3>
                     <p className='text-sm text-gray-400 mb-3'>
                        Autor: {article.author}
                     </p>

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
                        <p className='text-gray-600 line-clamp-3 mb-4'>
                           {article.excerpt}
                        </p>
                     )}
                  </div>

                  <Link
                     to={`/article/${article.id}`}
                     className='mt-auto inline-block bg-gray-800 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300'
                  >
                     Czytaj więcej
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default HomePage;

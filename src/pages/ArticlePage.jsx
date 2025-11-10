import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { usePageTitle } from "../hooks/usePageTitle";

const ArticlePage = () => {
   const { id } = useParams();
   const [article, setArticle] = useState(null);

   useEffect(() => {
      fetch("/data/running_articles.json")
         .then((response) => response.json())
         .then((data) => {
            const articleMeta = data.find(
               (article) => article.id === parseInt(id)
            );
            if (articleMeta) {
               fetch(articleMeta.content)
                  .then((response) => response.json())
                  .then((content) => {
                     setArticle({ ...articleMeta, ...content });
                  });
            }
         });
   }, [id]);

   usePageTitle(article?.title || "Artykuł");

   if (!article) {
      return (
         <div className='flex items-center justify-center min-h-[50vh] text-gray-500 dark:text-gray-400 animate-pulse'>
            Ładowanie artykułu...
         </div>
      );
   }

   return (
      <div className='max-w-4xl mx-auto px-4 py-10 transition-colors duration-300'>
         {/* Nagłówek artykułu */}
         <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3'>
            {article.title}
         </h1>
         <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
            Autor: {article.author}
         </p>

         {/* Główne zdjęcie */}
         {article.image && (
            <div className='mb-8'>
               <img
                  src={article.image}
                  alt={article.title}
                  className='rounded-lg shadow-md w-full max-h-[400px] object-cover transition-shadow duration-300'
               />
            </div>
         )}

         {/* Sekcje artykułu */}
         <div className='space-y-10'>
            {article.sections.map((section, index) => (
               <div
                  key={index}
                  className='bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-700 p-6 transition-all duration-300 hover:shadow-md dark:hover:shadow-gray-600'
               >
                  <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2'>
                     {section.title}
                  </h2>

                  {section.image && (
                     <img
                        src={section.image}
                        alt={section.title}
                        className='w-full rounded-lg mb-4 shadow-sm object-cover'
                     />
                  )}

                  <ReactMarkdown className='prose prose-gray dark:prose-invert max-w-none leading-relaxed prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-a:text-emerald-700 dark:prose-a:text-emerald-400 hover:prose-a:underline'>
                     {section.content}
                  </ReactMarkdown>
               </div>
            ))}
         </div>

         {/* Powrót */}
         <div className='text-center mt-10'>
            <Link
               to='/'
               className='inline-block bg-gray-800 dark:bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300'
            >
               Powrót do strony głównej
            </Link>
         </div>
      </div>
   );
};

export default ArticlePage;

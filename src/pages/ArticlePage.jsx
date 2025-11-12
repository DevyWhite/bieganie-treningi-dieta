import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { usePageTitle } from "../hooks/usePageTitle";

const ArticlePage = () => {
   const { id } = useParams();
   const [article, setArticle] = useState(null);

   useEffect(() => {
      fetch("/data/running_articles.json")
         .then((res) => res.json())
         .then((data) => {
            const meta = data.find((a) => a.id === parseInt(id));
            if (meta) {
               fetch(meta.content).then((res) =>
                  res
                     .json()
                     .then((content) => setArticle({ ...meta, ...content }))
               );
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
      <div className='max-w-4xl mx-auto px-1 py-5 sm:px-4 sm:py-10 transition-colors duration-300'>
         {/* Nagłówek artykułu */}
         <h1 className='text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100'>
            {article.title}
         </h1>
         <p className='text-sm text-center text-gray-500 dark:text-gray-400 mb-10'>
            Autor: {article.author}
         </p>

         {/* Główne zdjęcie */}
         {article.image && (
            <div className='mb-10 rounded-xl overflow-hidden shadow-md dark:shadow-gray-700'>
               <img
                  src={article.image}
                  alt={article.title}
                  className='w-full object-cover max-h-[400px] transition-transform duration-500 hover:scale-105'
               />
            </div>
         )}

         {/* Sekcje artykułu */}
         <div className='space-y-10'>
            {article.sections.map((section, idx) => (
               <div
                  key={idx}
                  className='bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-700 p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-600'
               >
                  <h2 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2'>
                     {section.title}
                  </h2>

                  {section.image && (
                     <img
                        src={section.image}
                        alt={section.title}
                        className='w-full rounded-xl mb-4 shadow-sm object-cover'
                     />
                  )}

                  <ReactMarkdown
                     className='prose prose-gray dark:prose-invert max-w-none leading-relaxed
                         prose-headings:text-gray-800 dark:prose-headings:text-gray-200
                         prose-a:text-emerald-700 dark:prose-a:text-emerald-400
                         hover:prose-a:underline
                         prose-blockquote:border-l-4 prose-blockquote:border-emerald-500
                         prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-700
                         prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-200
                         prose-blockquote:italic prose-blockquote:p-4 rounded-lg'
                  >
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

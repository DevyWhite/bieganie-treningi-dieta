import React from "react";

const Article = ({ title, author, text, image }) => {
   return (
      <article className='bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-700 p-4 md:p-6 mb-6 hover:shadow-md transition-shadow duration-200'>
         {image && (
            <img
               src={image}
               alt={title}
               className='w-full h-64 md:h-80 object-cover rounded-lg mb-4'
            />
         )}
         <h3 className='text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-200'>
            {title}
         </h3>
         <span className='block text-gray-500 text-sm mb-4'>
            Autor: {author}
         </span>
         <p className='text-gray-600 leading-relaxed'>{text}</p>
      </article>
   );
};

export default Article;

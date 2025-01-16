import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown"; // Importuj react-markdown
import "../styles/ArticlePage.css";

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

   if (!article) {
      return <div>Ładowanie...</div>;
   }

   return (
      <div className='article-page'>
         <h1>{article.title}</h1>
         <p className='author'>Autor: {article.author}</p>
         {article.image && (
            <img
               src={article.image}
               alt={article.title}
               className='article-image'
            />
         )}
         <div className='article-sections'>
            {article.sections.map((section, index) => (
               <div key={index} className='section'>
                  <h2>{section.title}</h2>
                  {section.image && (
                     <img
                        src={section.image}
                        alt={section.title}
                        className='section-image'
                     />
                  )}
                  {/* Użyj react-markdown do renderowania treści */}
                  <ReactMarkdown>{section.content}</ReactMarkdown>
               </div>
            ))}
         </div>
         <Link to='/' className='back-to-home'>
            Powrót do strony głównej
         </Link>
      </div>
   );
};

export default ArticlePage;

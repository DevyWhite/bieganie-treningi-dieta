import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
                     // Podział tekstu na linie
                     const paragraphs = content.text
                        .split("\n")
                        .map((line, index) => <p key={index}>{line}</p>);
                     setArticle({ ...articleMeta, ...content, paragraphs });
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
         <div className='full-text'>{article.paragraphs}</div>
         <Link to='/' className='back-to-home'>
            Powrót do strony głównej
         </Link>
      </div>
   );
};

export default ArticlePage;

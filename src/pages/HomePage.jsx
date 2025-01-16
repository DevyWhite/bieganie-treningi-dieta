import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

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
      <div className='home'>
         <div className='article-list'>
            {randomArticles.map((article) => (
               <div key={article.id} className='article-preview'>
                  <h3>{article.title}</h3>
                  <p className='author'>Autor: {article.author}</p>
                  {article.image && (
                     <img
                        src={article.image}
                        alt={article.title}
                        className='article-image'
                     />
                  )}
                  <Link to={`/article/${article.id}`} className='read-more'>
                     Czytaj więcej
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default HomePage;

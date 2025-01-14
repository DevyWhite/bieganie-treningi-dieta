import React from "react";
import "../styles/Article.css";

const Article = ({ title, author, text, image }) => {
   console.log(image);

   return (
      <article>
         {image && <img src={image} alt={title} className='article-image' />}
         <h3>{title}</h3>
         <span>{author}</span>
         <p>{text}</p>
      </article>
   );
};

export default Article;

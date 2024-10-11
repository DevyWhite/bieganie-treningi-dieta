import React from "react";
import Article from "../components/Article";
import articles from "../data/running_articles.json";

const HomePage = () => {
   const artList = articles.map((item) => <Article key={item.id} {...item} />);

   return <div className='home'>{artList}</div>;
};

export default HomePage;

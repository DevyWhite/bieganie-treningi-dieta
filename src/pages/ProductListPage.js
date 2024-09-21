import React from "react";
import { Link } from "react-router-dom";

const products = ["car", "bike", "train", "plane"];

const ProductListPage = () => {
   const list = products.map((item) => (
      <li key={item}>
         <Link to={`/product/${item}`}>{item}</Link>
      </li>
   ));
   return (
      <div className='products'>
         <h2>Lista produktow</h2>
         <div>
            <ul>{list}</ul>
         </div>
      </div>
   );
};

export default ProductListPage;

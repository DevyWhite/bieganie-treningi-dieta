import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Product from "../components/Product";

const ProductsPage = () => {
   const { id } = useParams();
   const location = useLocation();
   console.log(location);
   return (
      <>
         <div>Strona produktu: {id}</div>
         <Product id={id} />
         <Link to='/products'>Powrot do listy produktow</Link>
      </>
   );
};

export default ProductsPage;

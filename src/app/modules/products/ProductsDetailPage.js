import React from "react";
import { Helmet } from "react-helmet-async";

const ProductsDetailPage = ({ title }) => {
  document.title = title;
  return (
    <>
      <Helmet>
        <title>Products Detail</title>
      </Helmet>
      <div>
        <h1>Products Detail</h1>
      </div>
    </>
  );
};

export default ProductsDetailPage;

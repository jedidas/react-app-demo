import { Helmet } from "react-helmet-async";

import MainLayout from "app/layouts/MainLayout";

const ProductsHomePage = () => {
  document.title = "Products";
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <MainLayout>
        <h1>Products</h1>
      </MainLayout>
    </>
  );
};

export default ProductsHomePage;

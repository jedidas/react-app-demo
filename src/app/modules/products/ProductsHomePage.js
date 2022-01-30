import { Helmet } from "react-helmet-async";

const ProductsHomePage = () => {
  document.title = "Products";
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <h1>Products</h1>
    </>
  );
};

export default ProductsHomePage;

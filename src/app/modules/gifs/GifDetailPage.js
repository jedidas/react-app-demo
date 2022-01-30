import { Helmet } from "react-helmet-async";
//
import Footer from "app/layouts/components/Footer";
import Header from "app/layouts/components/Header";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";

import useGifDetail from "./hooks/useGifDetail";

function GifDetailPage({ params }) {

  const { id } = params;
  const { gif, isLoading } = useGifDetail({ id });

  if (!gif || isLoading) {
    return <CircularSpinnerComponent />;
  }

  const { title, url, slug } = gif;

  return (
    <>
      <Helmet>
        <title>Detail {title}</title>
      </Helmet>
      <Header />
      <section className="gifts_page_detail" id={id}>
        <h1>{title}</h1>
        <img src={url} alt={title} />
        <p>{slug}</p>
      </section>
      <Footer />
    </>
  );
}

export default GifDetailPage;

import { useLocation } from "wouter";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
//
import "./gifs-page.scss";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
import { INTERNAL_ROUTES } from "app/core/const/internal.routes";
import Footer from "app/layouts/components/Footer";
import Header from "app/layouts/components/Header";
import List from "./components/List";
import useGif from "./hooks/useGif";

export default function GifsPage() {
  document.title = "Gifs";

  const input = useRef();
  const [_, changePath] = useLocation();
  console.log(_);

  const { isLoading, gifs } = useGif();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    changePath(`${INTERNAL_ROUTES.GIF_SEARCH.path}/${input.current.value}`);
  };

  if (isLoading) {
    return <CircularSpinnerComponent />;
  }
  return (
    <>
      <Helmet>
        <title>Gifs</title>
      </Helmet>
      <Header />
      <section className="gifts_page">
        <h1>Gifs</h1>

        <form className="gify__form" onSubmit={handleOnSubmit}>
          <input type="text" placeholder="Search..." ref={input} />
          <button type="submit">Search</button>
        </form>

        <List gifs={gifs} />
      </section>
      <Footer />
    </>
  );
}

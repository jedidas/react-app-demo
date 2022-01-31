import { Helmet } from "react-helmet-async";
//
import "./gifs-page.scss";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
import Footer from "app/layouts/components/Footer";
import List from "./components/List";
import useGif from "./hooks/useGif";
import SearchForm from "./components/SearchForm";

export default function GifsPage() {
  const { isLoading, gifs } = useGif({
    keyboard: "",
    rating: "g",
    lang: "en",
  });

  if (isLoading) {
    return <CircularSpinnerComponent />;
  }
  return (
    <>
      <Helmet>
        <title>My Gifs</title>
      </Helmet>

      <section className="gifts_page">
        <h1>Gifs</h1>

        <SearchForm />

        <List gifs={gifs} />
      </section>
      <Footer />
    </>
  );
}

import { Helmet } from "react-helmet-async";
//
import "./gifs-page.scss";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
import Footer from "app/layouts/components/Footer";
import Header from "app/layouts/components/Header";
import List from "./components/List";
import useGif from "./hooks/useGif";
import SearchForm from "./components/SearchForm";

export default function GifsPage() {

  const { isLoading, gifs } = useGif();

  if (isLoading) {
    return <CircularSpinnerComponent />;
  }
  return (
    <>
      <Helmet>
        <title>My Gifs</title>
      </Helmet>
      <Header />
      <section className="gifts_page">
        <h1>Gifs</h1>

        <SearchForm />

        <List gifs={gifs} />
      </section>
      <Footer />
    </>
  );
}

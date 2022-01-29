import { useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
//
import useGif from "./hooks/useGif";
import useNearScreen from "app/core/hooks/useNearScreen";
//
import List from "./components/List";
import Header from "app/layouts/components/Header";
import Footer from "app/layouts/components/Footer";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
import debounce from "just-debounce-it";

function SearchResults({ params }) {
  //

  const { keyboard = "" } = params;
  const externalRef = useRef();
  const { isLoading, gifs } = useGif({ keyboard });
  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false,
    distance: "450px",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextPage = useCallback(
    debounce(() => {
      console.log("handleNextPage");
    }, 600),
    []
  );

  useEffect(() => {
    if (isNearScreen) {
      handleNextPage();
    }
  }, [handleNextPage, isNearScreen]);

  if (isLoading) {
    return <CircularSpinnerComponent />;
  }
  return (
    <>
      <Helmet>
        <title>Search results for: {keyboard}</title>
      </Helmet>
      <Header />
      <section className="gifts_page">
        <List gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </section>
      <Footer />
    </>
  );
}

export default SearchResults;

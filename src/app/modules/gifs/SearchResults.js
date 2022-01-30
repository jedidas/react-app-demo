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
import SearchForm from "./components/SearchForm";

function SearchResults({ params }) {
  const { keyboard, rating, lang } = params;
  const externalRef = useRef();
  const { isLoading, gifs, setPage } = useGif({ keyboard, rating, lang });
  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false,
    distance: "850px",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(gifs.length + 1), 600),
    [setPage, gifs]
  );

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage();
    }
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      <Helmet>
        <title>Search results for: {keyboard}</title>
      </Helmet>
      <Header />
      <section className="gifts_page">
        <SearchForm
          initialKeyword={keyboard}
          initialRating={rating}
          initialLang={lang}
        />
        <List gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
        {isLoading && <CircularSpinnerComponent />}
      </section>
      <Footer />
    </>
  );
}

export default SearchResults;

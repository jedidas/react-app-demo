import React, { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
//
import useMovies from "app/core/hooks/useMovies";
import { INTERNAL_PATHS } from "app/core/const/internal.routes";
import useNearScreen from "app/core/hooks/useNearScreen";
import useFilter from "app/core/hooks/useFilter";
//
import MainLayout from "app/layouts/MainLayout";
//
import ListMovieItem from "app/shared/components/simple-list-component/ListMovieItem";
import SimpleListComponent from "app/shared/components/simple-list-component/SimpleListComponent";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
import LazyTrendingComponent from "app/shared/components/trending/LazyTrendingComponent";
import FilterComponent from "app/modules/movies/components/FilterComponent";

//
const MovieHomePage = () => {
  //
  const { stateFilter, handleChangeFilter } = useFilter({
    sort_by: "popularity.desc",
    callback: ({ name, value }) => {
      setPage(1);
    },
  });
  const { movies, isLoading, setPage } = useMovies({
    filter: stateFilter,
  });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false,
    distance: "450px",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => {
      setPage((prevState) => prevState + 1);
    }, 500),
    []
  );
  //
  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  console.log("MovieHomePage");
  /**
   * Render Template
   */

  return (
    <MainLayout>
      <div className="app_layout__page">
        <div className="app_layout__content">
          <div className="container-fluid">
            <div className="row">
              {/* Filter */}
              <FilterComponent
                handleChange={handleChangeFilter}
                state={stateFilter}
              />

              <div className="col-12">
                <h1>Movie List</h1>
              </div>

              <div style={{ minHeight: "1000px" }}>
                <SimpleListComponent>
                  {movies.map(
                    ({
                      id,
                      title,
                      backdrop_path,
                      overview,
                      popularity,
                      vote_average,
                    }) => (
                      <ListMovieItem
                        key={id}
                        id={id}
                        title={title}
                        backdrop_path={backdrop_path}
                        overview={overview}
                        popularity={popularity}
                        vote_average={vote_average}
                        url={`${INTERNAL_PATHS.MOVIE_DETAIL}${id}`}
                      />
                    )
                  )}
                </SimpleListComponent>
              </div>

              {isLoading && <CircularSpinnerComponent />}
              <div id="visor" ref={externalRef}></div>
            </div>
          </div>
        </div>
        <aside className="app_layout__sidebar">
          <LazyTrendingComponent />
        </aside>
      </div>
    </MainLayout>
  );
};

export default React.memo(MovieHomePage);

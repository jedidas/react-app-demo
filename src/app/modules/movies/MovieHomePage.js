import { useState } from "react";
//
import useMovies from "app/core/hooks/useMovies";
import MainLayout from "app/layouts/MainLayout";
//
import { INTERNAL_PATHS } from "app/core/const/internal.routes";
import ListMovieItem from "app/shared/components/simple-list-component/ListMovieItem";
import SimpleListComponent from "app/shared/components/simple-list-component/SimpleListComponent";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
import LazyTrendingComponent from "app/shared/components/trending/LazyTrendingComponent";
//
const MovieHomePage = () => {
  //
  const [stateFilter, setstateFilter] = useState({
    sort_by: "popularity.desc",
  });

  const { movies = [] } = useMovies({ filters: stateFilter });

  const handleChangeFilter = (event) => {
    let { name, value } = event.target;
    if (name === "include_adult") {
      value = event.target.checked;
    }
    setstateFilter({ ...stateFilter, [name]: value });
  };

  if (movies.loading) {
    return <CircularSpinnerComponent />;
  }

  return (
    <MainLayout>
      <div className="app_layout__page">
        <div className="app_layout__content">
          <h1>Movie List</h1>
          <div className="app_filter">
            <div className="row">
              <div className="col">
                <label className="form-check-label" htmlFor="sort_by">
                  Sort by
                </label>
                <select
                  id="sort_by"
                  className="form-select"
                  value={stateFilter.sort_by}
                  onChange={handleChangeFilter}
                  name="sort_by"
                >
                  <option value="popularity.desc">Popularity desc</option>
                  <option value="popularity.asc">Popularity asc</option>
                  <option value="release_date.asc">Release date asc</option>
                  <option value="release_date.desc">Release date desc</option>
                  <option value="revenue.asc">Revenue asc</option>
                  <option value="revenue.desc">Revenue desc</option>
                  <option value="primary_release_date.asc">
                    Primary release date asc
                  </option>
                  <option value="primary_release_date.desc">
                    Primary release date desc
                  </option>
                  <option value="original_title.asc">Original title asc</option>
                  <option value="original_title.desc">
                    Original title desc
                  </option>
                  <option value="vote_average.asc">Vote average asc</option>
                  <option value="vote_average.desc">Vote average desc</option>
                  <option value="vote_count.asc">Vote count asc</option>
                  <option value="vote_count.desc">Vote count desc</option>
                </select>
              </div>

              {/* <div className="col">
            <select
              className="form-select"
              value={stateFilter.language}
              onChange={handleChangeFilter}
              name="language"
            >
              <option value="es">Spanish</option>
              <option value="en">English</option>
              <option value="ja">ja</option>
              <option value="fr">fr</option>
              <option value="cy">cy</option>
              <option value="uk">uk</option>
              <option value="nb">nb</option>
              <option value="sv">sv</option>
              <option value="de">de</option>
              <option value="tr">tr</option>
              <option value="nl">nl</option>
              <option value="de">de</option>
              <option value="no">no</option>
            </select>
          </div> */}

              {/* <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                id="adult"
                type="checkbox"
                checked={stateFilter.include_adult}
                onChange={handleChangeFilter}
                name="include_adult"
              />
              <label className="form-check-label" htmlFor="adult">
                Include adult
              </label>
            </div>
          </div> */}
            </div>
          </div>

          <SimpleListComponent>
            {movies.data.map(
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
        <aside className="app_layout__sidebar">
          <LazyTrendingComponent/>
        </aside>
      </div>
    </MainLayout>
  );
};

export default MovieHomePage;

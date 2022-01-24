import { useContext, useEffect, useState } from "react";
//
import { movieService } from "app/core/services/api/MovieService";
import MovieContext from "../contexts/MoviesContext";

function useMovies({ filter }) {
  //
  const [currentPage, setPage] = useState(1);
  const { movies, isLoading, setMovies } = useContext(MovieContext);
  //useEffect
  useEffect(() => {
    setMovies((prevState) => ({ ...prevState, isLoading: true }));
    //
    console.log("useMovies", currentPage);
    //
    movieService
      .getDiscoverMovies({ ...filter, page: currentPage })
      .then(({ total_pages, results }) => {
        setMovies((prevState) => ({
          ...prevState,
          isLoading: false,
          data: currentPage === 1 ? results : [...prevState.data, ...results],
          totalPage: total_pages,
        }));
      })
      .catch((error) => {
        setMovies({ data: [], isLoading: false, error });
      });
  }, [filter, currentPage, setMovies]);

  //
  return { movies: movies, isLoading, setPage };
}
export default useMovies;

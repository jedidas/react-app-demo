import { useContext, useEffect, useState } from "react";
import MovieContext from "app/core/contexts/MoviesContext";
import { movieService } from "app/core/services/api/MovieService";

const useMovieDetail = (id) => {
  const { findById } = useContext(MovieContext);
  const [movie, setmovie] = useState(null);
  const foundedMovie = findById(id);

  useEffect(() => {
    if (foundedMovie !== null) {
      setmovie(foundedMovie);
      return;
    }

    movieService
      .getDetails(id)
      .then((response) => {
        setmovie(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, foundedMovie]);

  return { movie };
};
export default useMovieDetail;

import MovieService from "app/core/services/api/MovieService";

const { useState, useEffect } = require("react");

function useMovies({ filters }) {
  //Use states
  const [movies, setMovies] = useState({
    loading: true,
    data: [],
    error: null,
  });
  //useEffect
  useEffect(() => {
    const servie = new MovieService();
    servie
      .getDiscoverMovies(filters)
      .then(({ results }) => {
        setMovies((prevState) => ({
          ...prevState,
          loading: false,
          data: results,
        }));
      })
      .catch((error) => {
        setMovies({ data: [], loading: false, error });
      });
  }, [filters]);
  //
  return { movies };
}
export default useMovies;

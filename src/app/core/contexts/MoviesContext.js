import React, { useState } from "react";

export const MovieContext = React.createContext({
  isLoading: false,
  data: [],
  error: null,
  totalPage: 0,
});

export function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState({
    isLoading: false,
    data: [],
    error: null,
    totalPage: 0,
  });

  const findById = (id) => {
    return movies.data.find((movie) => +movie.id === +id) || null;
  };

  return (
    <MovieContext.Provider
      value={{
        movies: movies.data,
        isLoading: movies.isLoading,
        setMovies,
        findById,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;

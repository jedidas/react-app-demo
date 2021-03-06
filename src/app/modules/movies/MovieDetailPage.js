import React from "react";
import { Helmet } from "react-helmet-async";
//
import "./movie-detail-page.scss";
import { checkImage } from "app/core/utils/utils";
import useMovieDetail from "app/core/hooks/useMovieDetail";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";

const MovieDetailPage = ({ params }) => {
  console.log("params", params);
  const { id } = params;
  const { movie } = useMovieDetail(id);

  if (!movie) {
    return <CircularSpinnerComponent />;
  }

  /**
   * Render Template
   */
  console.log("MovieDetailPage");

  return (
    <>
      <Helmet>
        <title>{movie.original_title}</title>
      </Helmet>
      <div className="movie-detail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="movie-detail__title">
                Detail {movie.original_title}
              </h1>
            </div>
            <div className="movie-detail__banner">
              <img
                src={checkImage(movie.backdrop_path, "ORIGINAL")}
                alt={movie.original_title}
                className="img"
              />
            </div>
            <div className="movie-detail__overview">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MovieDetailPage, (prevProps, nextProps) => {
  return prevProps.params.id === nextProps.params.id;
});

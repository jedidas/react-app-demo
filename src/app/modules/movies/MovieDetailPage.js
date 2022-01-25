import React from "react";
import "./movie-detail-page.scss";
//
import MainLayout from "app/layouts/MainLayout";
import { checkImage } from "app/core/utils/utils";
import useMovieDetail from "app/core/hooks/useMovieDetail";
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";

const MovieDetailPage = ({ params }) => {
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
    <MainLayout>
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
    </MainLayout>
  );
};

export default React.memo(MovieDetailPage, (prevProps, nextProps) => {
  return prevProps.params.id === nextProps.params.id;
});

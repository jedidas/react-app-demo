import { Link } from "wouter";

import API_ROUTES from "app/core/const/api.routes";

const ListMovieItem = ({
  id,
  title,
  backdrop_path,
  overview,
  popularity,
  vote_average,
  url
}) => {
  const apiRoutes = API_ROUTES;
  let checkImage = (image) => {
    if (image) {
      return apiRoutes.IMAGE.W500 + image;
    }
    return "https://via.placeholder.com/500x280";
  };

  return (
    <li className="app_list-movies__item" id={id}>
      <Link to={url} className="app_list-movies__item-link">
        <div className="app_list-movies__thumbnail">
          <img src={checkImage(backdrop_path)} alt={title} />
        </div>
        <article className="app_list-movies__info">
          <h3 className="app_list-movies__title">{title}</h3>
          <p className="app_list-movies__range">
            <span className="app_list-movies__range-popularity">
              <strong>Popularity:</strong> {popularity}
            </span>
            <span>
              <strong>Average:</strong> {vote_average}
            </span>
          </p>
          <p className="app_list-movies__description">{overview}</p>
        </article>
      </Link>
    </li>
  );
};

export default ListMovieItem;

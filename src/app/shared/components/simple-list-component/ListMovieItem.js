import { Link } from "wouter";

import { checkImage } from "app/core/utils/utils";

const ListMovieItem = ({
  id,
  title,
  backdrop_path,
  overview,
  popularity,
  vote_average,
  url
}) => {

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

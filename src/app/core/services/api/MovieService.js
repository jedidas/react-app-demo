import API_ROUTES from "app/core/const/api.routes";
import ApiService from "./ApiService";

class MovieService extends ApiService {
  apiRoutes = API_ROUTES;
  getDiscoverMovies = ({
    include_adult = false,
    sort_by = "popularity.desc",
    page = 1,
  }) => {
    return this.get(
      `${API_ROUTES.MOVIES.DISCOVER_MOVIES}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&sort_by=${sort_by}&include_adult=${include_adult}&page=${page}`
    );
  };
  getDetails = (id) => {
    return this.get(
      `${API_ROUTES.MOVIES.DETAILS}/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    );
  };
  getTrending = (media_type = "movie", time_window = "week") => {
    return this.get(
      `${API_ROUTES.TRENDING}/${media_type}/${time_window}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    );
  };
}

export default MovieService;
export const movieService = new MovieService();

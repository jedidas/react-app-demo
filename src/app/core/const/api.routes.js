const API_ROUTES = {
  MOVIES: {
    DISCOVER_MOVIES: `${process.env.REACT_APP_MOVIES_API_URL}discover/movie`,
    DETAILS: `${process.env.REACT_APP_MOVIES_API_URL}movie`,
  },
  TRENDING: `${process.env.REACT_APP_MOVIES_API_URL}trending`,
  IMAGE: {
    W200: `${process.env.REACT_APP_MOVIES_API_IMAGE_URL}t/p/w200`,
    W500: `${process.env.REACT_APP_MOVIES_API_IMAGE_URL}t/p/w500`,
    ORIGINAL: `${process.env.REACT_APP_MOVIES_API_IMAGE_URL}t/p/original`,
  },
};

export default API_ROUTES;

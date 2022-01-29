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
  GIFY: {
    SEARCH: `${process.env.REACT_APP_GIFY_API_URL}/search?api_key=${process.env.REACT_APP_GIFY_API_KEY}`,
    DETAIL: `${process.env.REACT_APP_GIFY_API_URL}/REPLACE?api_key=${process.env.REACT_APP_GIFY_API_KEY}`,
  },
};

export default API_ROUTES;

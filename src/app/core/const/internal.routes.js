import GifsPage from "app/modules/gifs/GifsPage";
import GifDetailPage from "app/modules/gifs/GifDetailPage";
import SearchResults from "app/modules/gifs/SearchResults";
import MovieDetailPage from "app/modules/movies/MovieDetailPage";
import MovieHomePage from "app/modules/movies/MovieHomePage";
import ProductsDetailPage from "app/modules/products/ProductsDetailPage";
import ProductsHomePage from "app/modules/products/ProductsHomePage";

export const ROUTES_PATHS = {
  MOVIE: {
    HOME: "/",
    DETAIL: "/detail/",
  },
  PRODUCT: {
    HOME: "/products",
    DETAIL: "/detail/",
  },
  GIF: {
    HOME: "/gifs",
    DETAIL: "/detail",
    SEARCH: "/search",
  },
};

export const INTERNAL_PATHS = {
  MOVIE_DEFAULT: `${ROUTES_PATHS.MOVIE.HOME}`,
  MOVIE_DETAIL: `${ROUTES_PATHS.MOVIE.DETAIL}`,
  //
  PRODUCT_DEFAULT: `${ROUTES_PATHS.PRODUCT.HOME}`,
  PRODUCT_DETAIL: `${ROUTES_PATHS.PRODUCT.DETAIL}`,
  //
  GIF_DEFAULT: `${ROUTES_PATHS.GIF.HOME}`,
  GIF_DETAIL: `${ROUTES_PATHS.GIF.HOME}${ROUTES_PATHS.GIF.DETAIL}`,
  GIF_SEARCH: `${ROUTES_PATHS.GIF.HOME}${ROUTES_PATHS.GIF.SEARCH}`,
};

export const INTERNAL_ROUTES = {
  MOVIE_HOME_PAGE: {
    path: INTERNAL_PATHS.MOVIE_DEFAULT,
    component: MovieHomePage,
  },
  MOVIE_DETAIL_PAGE: {
    path: `${INTERNAL_PATHS.MOVIE_DETAIL}:id`,
    component: MovieDetailPage,
  },
  //
  PRODUCT_HOME_PAGE: {
    path: INTERNAL_PATHS.PRODUCT_DEFAULT,
    component: ProductsHomePage,
  },
  PRODUCT_DETAIL_PAGE: {
    path: `${INTERNAL_PATHS.PRODUCT_DETAIL}:id`,
    component: ProductsDetailPage,
  },
  GIF_HOME: {
    path: INTERNAL_PATHS.GIF_DEFAULT,
    component: GifsPage,
  },
  GIF_SEARCH: {
    path: `${INTERNAL_PATHS.GIF_SEARCH}`,
    component: SearchResults,
  },
  GIF_DETAIL: {
    path: INTERNAL_PATHS.GIF_DETAIL,
    component: GifDetailPage,
  },
};

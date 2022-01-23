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
};

export const INTERNAL_PATHS = {
  MOVIE_DEFAULT: `${ROUTES_PATHS.MOVIE.HOME}`,
  MOVIE_DETAIL: `${ROUTES_PATHS.MOVIE.DETAIL}`,
  //
  PRODUCT_DEFAULT: `${ROUTES_PATHS.PRODUCT.HOME}`,
  PRODUCT_DETAIL: `${ROUTES_PATHS.PRODUCT.DETAIL}`,
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
};

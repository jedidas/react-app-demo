import "./App.scss";
//
import { Route } from "wouter";
import { INTERNAL_ROUTES, ROUTES_PATHS } from "app/core/const/internal.routes";
import { MoviesContextProvider } from "app/core/contexts/MoviesContext";

function App() {
  return (
    <MoviesContextProvider >
      <Route
        path={INTERNAL_ROUTES.MOVIE_HOME_PAGE.path}
        component={INTERNAL_ROUTES.MOVIE_HOME_PAGE.component}
      />
      <Route
        path={INTERNAL_ROUTES.MOVIE_DETAIL_PAGE.path}
        component={INTERNAL_ROUTES.MOVIE_DETAIL_PAGE.component}
      />
      <Route
        path={ROUTES_PATHS.PRODUCT.HOME}
        component={INTERNAL_ROUTES.PRODUCT_HOME_PAGE.component}
      />
    </MoviesContextProvider>
  );
}

export default App;

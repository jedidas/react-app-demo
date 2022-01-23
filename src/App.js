import "./App.scss";
//
import { Route } from "wouter";
import { Fragment } from "react";
import { INTERNAL_ROUTES, ROUTES_PATHS } from "app/core/const/internal.routes";

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;

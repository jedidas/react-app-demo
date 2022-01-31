import React from "react";
import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
//
import "./App.scss";
import { INTERNAL_ROUTES } from "app/core/const/internal.routes";
import { MoviesContextProvider } from "app/core/contexts/MoviesContext";
import GifContextProvider from "app/modules/gifs/contexts/GifContext";
import Header from "app/layouts/components/Header";
import AuthContextProvider from "app/core/contexts/AuthContext";

function App() {
  return (
    <HelmetProvider>
      <AuthContextProvider>
        <Header />
        <MoviesContextProvider>
          <GifContextProvider>
            <Switch>
              <Route
                path={INTERNAL_ROUTES.MOVIE_HOME_PAGE.path}
                component={INTERNAL_ROUTES.MOVIE_HOME_PAGE.component}
              />
              <Route
                path={INTERNAL_ROUTES.MOVIE_DETAIL_PAGE.path}
                component={INTERNAL_ROUTES.MOVIE_DETAIL_PAGE.component}
              />
              <Route
                path={INTERNAL_ROUTES.PRODUCT_HOME_PAGE.path}
                component={INTERNAL_ROUTES.PRODUCT_HOME_PAGE.component}
              />

              <Route
                path={INTERNAL_ROUTES.GIF_HOME.path}
                component={INTERNAL_ROUTES.GIF_HOME.component}
              />
              <Route
                path={
                  INTERNAL_ROUTES.GIF_SEARCH.path + "/:keyboard/:rating?/:lang?"
                }
                component={INTERNAL_ROUTES.GIF_SEARCH.component}
              />
              <Route
                path={INTERNAL_ROUTES.GIF_DETAIL.path + "/:id"}
                component={INTERNAL_ROUTES.GIF_DETAIL.component}
              />
              <Route
                component={INTERNAL_ROUTES.NOT_FOUND.component}
                path={INTERNAL_ROUTES.NOT_FOUND.path}
              />
            </Switch>
          </GifContextProvider>
        </MoviesContextProvider>
      </AuthContextProvider>
    </HelmetProvider>
  );
}

export default App;

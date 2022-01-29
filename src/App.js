import React from "react";
import { Route } from "wouter";
import { HelmetProvider } from "react-helmet-async";
//
import "./App.scss";
import { INTERNAL_ROUTES } from "app/core/const/internal.routes";
import { MoviesContextProvider } from "app/core/contexts/MoviesContext";
import GifContextProvider from "app/modules/gifs/contexts/GifContext";

function App() {
  return (
    <HelmetProvider>
      <MoviesContextProvider>
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
        <GifContextProvider value={{ name: "Hey" }}>
          <Route
            path={INTERNAL_ROUTES.GIF_HOME.path}
            component={INTERNAL_ROUTES.GIF_HOME.component}
          />
          <Route
            path={INTERNAL_ROUTES.GIF_SEARCH.path + "/:keyboard?"}
            component={INTERNAL_ROUTES.GIF_SEARCH.component}
          />
          <Route
            path={INTERNAL_ROUTES.GIF_DETAIL.path + "/:id"}
            component={INTERNAL_ROUTES.GIF_DETAIL.component}
          />
        </GifContextProvider>
      </MoviesContextProvider>
    </HelmetProvider>
  );
}

export default App;

import React, { useRef } from "react";
import { Link, useLocation } from "wouter";

import logo from "assets/bootstrap-logo.svg";
import { INTERNAL_ROUTES } from "app/core/const/internal.routes";

const Header = () => {
  const collapse = useRef();
  const [parentLocation] = useLocation();

  const addActiveClass = (path) => {
    return parentLocation === path ? "nav-link active" : "nav-link";
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    collapse.current.classList.toggle("show");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={INTERNAL_ROUTES.MOVIE_HOME_PAGE.path}
          >
            <img src={logo} alt="" width="30" height="24" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleOnClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse collapse"
            ref={collapse}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={INTERNAL_ROUTES.MOVIE_HOME_PAGE.path}
                  className={addActiveClass(
                    INTERNAL_ROUTES.MOVIE_HOME_PAGE.path
                  )}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={INTERNAL_ROUTES.PRODUCT_HOME_PAGE.path}
                  className={addActiveClass(
                    INTERNAL_ROUTES.PRODUCT_HOME_PAGE.path
                  )}
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={INTERNAL_ROUTES.GIF_HOME.path}
                  className={addActiveClass(INTERNAL_ROUTES.GIF_HOME.path)}
                >
                  Gifs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);

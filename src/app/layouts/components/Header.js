import { INTERNAL_ROUTES } from "app/core/const/internal.routes";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [parentLocation] = useLocation();

  const addActiveClass = (path) => {
    return parentLocation === path ? "nav-link active" : "nav-link";
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={INTERNAL_ROUTES.MOVIE_HOME_PAGE.path}>
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
            />
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  type="button"
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
                  type="button"
                  to={INTERNAL_ROUTES.PRODUCT_HOME_PAGE.path}
                  className={addActiveClass(
                    INTERNAL_ROUTES.PRODUCT_HOME_PAGE.path
                  )}
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

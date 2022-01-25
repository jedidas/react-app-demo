import React, { Fragment } from "react";

import "./main-layout.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = ({ children, isStatic = false }) => {
  return (
    <Fragment>
      <Header />
      <div className="flex-shrink-0">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default React.memo(MainLayout);

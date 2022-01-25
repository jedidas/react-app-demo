import React from "react";
import "./simple-list-component.scss";

const SimpleListComponent = ({ children }) => {
  return <ul className="app_list-movies">{children}</ul>;
};

export default React.memo(SimpleListComponent);

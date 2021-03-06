import React from "react";
import "./circular-spinner-component.scss";
//
const CircularSpinnerComponent = () => {
  return (
    <div className="circular-spinner">
      <div className="loader">Loading...</div>
    </div>
  );
};

export default React.memo(CircularSpinnerComponent);

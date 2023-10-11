import React from "react";
import "./CTAButton.scss";

const CTAButton = ({ link, children }) => {
  return (
    <button className="CTAButton">
      {children}
    </button>
  );
};

export default CTAButton;

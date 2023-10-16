import React from "react";
import "./CTAButton.scss";

const CTAButton = ({ link, children }) => {
  return (
    <button href={link} className="CTAButton">
      {children}
    </button>
  );
};

export default CTAButton;

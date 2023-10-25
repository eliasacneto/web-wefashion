import React from "react";
import "./CTAButton.scss";

const CTAButton = ({ link, children }) => {
  return (
    <a href={link} style={{textDecoration: 'none'}} ><button className="CTAButton">
      {children}
    </button></a>
  );
};

export default CTAButton;

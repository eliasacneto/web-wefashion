import React from 'react';
import wefashionPic from "./../../assets/Wefashion-preto.svg";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="side-content">
        <h1 className='newsletter_title'>
          Seja você também um aluno <span className='yellow-text'>WeFashion</span>
        </h1>
        <p className='newsletter_text'>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="input-newsletter">
        <input type="text" />
      </div>
    </div>
  );
};

export default Newsletter
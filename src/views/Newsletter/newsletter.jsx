import React, { useState } from 'react';
import wefashionPic from './../../assets/Wefashion-preto.svg';
import './newsletter.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="newsletter">
      <div className="side-content">
        <h1 className="newsletter_title">
          Seja você também um aluno <span className="yellow-text">WeFashion</span>
        </h1>
        <p className="newsletter_text">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="input-container">
          <input
            className={email ? 'newsletter-input active' : 'newsletter-input'}
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="input-placeholder">Digite o seu melhor e-mail</label>
          <button className="subscribe-button">Enviar</button>
        </div>
      </div>
      <div className="newsletter_img">
        <img src={wefashionPic} alt="Erro-img" />
      </div>
    </div>
  );
};

export default Newsletter;

import React, { useState } from "react";
import yellowImg from './../../assets/WeFashion-img-yellow.svg';
import "./newsletter.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="newsletter">
      <div className="newsletter_img">
        <img src={yellowImg} alt="Erro-img" />
      </div>
      <div className="side-content">
        <h1 className="newsletter_title">
          Comece a sua jornada de moda <span className="underlight-small">hoje</span>
          <span className="yellow-text">!</span>
        </h1>
        <p className="newsletter_text">
          Preencha o formulário abaixo para um dos nossos consultores entrar em contato com você.</p>

        <div className="input-container">
          <input
            className={email ? "newsletter-input active" : "newsletter-input"}
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="input-placeholder">
            Digite o seu melhor e-mail
          </label>
          <button className="subscribe-button">Enviar</button>
        </div>
        <p className="newsletter_text_small">⚠️ Este é o primeiro passo para mergulhar no mundo emocionante da moda!
        </p>
      </div>

    </div>
  );
};

export default Newsletter;

import React from 'react'
import Why from "./../../assets/images/why.jpg"
import ImgCTA from "./../../assets/images/img-cta.jpg"
import Instructor from "/src/assets/icons/01.svg";
import Diversity from "/src/assets/icons/02.svg";
import Quality from "/src/assets/icons/03.svg";
import Class from "/src/assets/icons/04.svg";
import './ChooseUs.scss'
import WhatsApp from "../../assets/icons/whatsapp-logo.svg";
import CTAButton from '../../Components/CTAButton/CTAButton';
import { Link } from 'react-router-dom';

const ChooseUs = () => {
  return (
    <div id='about' className='ChooseUs'>
      <div className='ChooseUs__Left'>
        <div className="ChooseUs__Left__Content">
          <h1 className="ChooseUs__Left__Content--title">Por que <u className="underlight-small">escolher</u> a <span className="highlight">We</span>Fashion<span className="highlight">?</span></h1>

          <ul className='ChooseUs__Left__Content--ul'>
            <li className='ChooseUs__Left__Content--li'>
              <img className="icon-w" src={Quality} />
              <h3 className='ChooseUs__Left__Content--text'>Tradição e Experiência</h3>
              <p className='ChooseUs__Left__Content--description'>Com 12 anos de experiência em São José dos Campos, somos líderes no ensino de moda.</p>
            </li>
            <li className='ChooseUs__Left__Content--li'>
              <img className="icon-w" src={Instructor} />
              <h3>Instrutores Qualificados</h3>
              <p>Nossos instrutores são especialistas no campo da moda, prontos para guiá-lo em cada etapa.</p>
            </li>
            <li className='ChooseUs__Left__Content--li'>
              <img className="icon-w" src={Diversity} />
              <h3>Foco na Diversidade</h3>
              <p>Celebramos todos os tipos de corpos e estilos, promovendo a inclusão na moda.</p>
            </li>
            <li className='ChooseUs__Left__Content--li'>
              <img className="icon-w" src={Class} />
              <h3>Aulas Práticas</h3>
              <p>Aprenda fazendo, com aulas de modelagem e costura que colocam suas habilidades em prática desde o início.</p>
            </li>
          </ul>
        </div>
        <div className='ChooseUs__Left__ImgContainer'>
          <img className="ChooseUs__Left__ImgContainer--img" src={Why} alt="post01" loading="lazy" />
        </div>

      </div>
      <div id='contact' className='ChooseUs__Right'>
        <div className="ChooseUs__Right__ImgContainer">
          <img className="ChooseUs__Right__ImgContainer--img" src={ImgCTA} alt="post02" loading="lazy" />
        </div>
        <div className="ChooseUs__Right__Content">
          <h1 className="ChooseUs__Right__Content--title">⏰ Inicie a sua jornada de moda agora! </h1>
          <p className="ChooseUs__Right__Content--subtitle"> A <b><span className="highlight-y">We</span>Fashion</b> é o seu ponto de partida para uma jornada emocionante no mundo da moda.</p>
          <p className="ChooseUs__Right__Content--subtitle">Descubra seu estilo, crie roupas únicas e <b><span className="highlight-y">faça parte</span></b> de uma comunidade diversificada e inspiradora. Junte-se a nós e torne-se um criador de moda confiante e talentoso!</p>

          <Link to="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es.%20%F0%9F%98%8A" target='_blank' className='whats-link'><CTAButton><img width={30} src={WhatsApp} />
            Fale com um consultor</CTAButton></Link>
        </div>
      </div>

    </div >
  )
}

export default ChooseUs
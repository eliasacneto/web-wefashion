import React from 'react'
import Why from "./../../assets/images/why.jpg"
import ImgCTA from "./../../assets/images/img-cta.jpg"
import Instructor from "/src/assets/icons/01.svg";
import Diversity from "/src/assets/icons/02.svg";
import Quality from "/src/assets/icons/03.svg";
import Class from "/src/assets/icons/04.svg";
import './ChooseUs.scss'
import { ButtonYellow } from '../../Components/ButtonYellow/ButtonYellow';
import CTAButton from '../../Components/CTAButton/CTAButton';

const ChooseUs = () => {
  return (
    <div id='About' className='ChooseUs'>
      <div className='choose-left'>
        <div className="choose-content">
          <h1 className="choose-title">Por que <u className="underlight-small">escolher</u> a <span className="highlight">We</span>Fashion<span className="highlight">?</span></h1>

          <ul className='grid-list choose-ul'>
            <li className='grid-item choose-li'>
              <img className="icon-w" src={Quality} />
              <h3 className='choose-text'>Tradição e Experiência</h3>
              <p className='choose-description'>Com 12 anos de experiência em São José dos Campos, somos líderes no ensino de moda.</p>
            </li>
            <li className='grid-item choose-li'>
              <img className="icon-w" src={Instructor} />
              <h3>Instrutores Qualificados</h3>
              <p>Nossos instrutores são especialistas no campo da moda, prontos para guiá-lo em cada etapa.</p>
            </li>
            <li className='grid-item choose-li'>
              <img className="icon-w" src={Diversity} />
              <h3>Foco na Diversidade</h3>
              <p>Celebramos todos os tipos de corpos e estilos, promovendo a inclusão na moda.</p>
            </li>
            <li className='grid-item choose-li'>
              <img className="icon-w" src={Class} />
              <h3>Aulas Práticas</h3>
              <p>Aprenda fazendo, com aulas de modelagem e costura que colocam suas habilidades em prática desde o início.</p>
            </li>
          </ul>
        </div>
        <div>
          <img className="choose-img" src={Why} alt="post01" loading="lazy" />
        </div>

      </div>
      <div id='Contact' className='post-right'>
        <div className="img2">
          <img className="post-img-l" src={ImgCTA} alt="post02" loading="lazy" />
        </div>
        <div className="post-content">
          <h1 className="post-title">⏰ Inicie a sua jornada de moda agora! </h1>
          <p className="post-subtitle"> A <b><span className="highlight-y">We</span>Fashion</b> é o seu ponto de partida para uma jornada emocionante no mundo da moda.</p>
          <p className="post-subtitle">Descubra seu estilo, crie roupas únicas e <b><span className="highlight-y">faça parte</span></b> de uma comunidade diversificada e inspiradora. Junte-se a nós e torne-se um criador de moda confiante e talentoso!</p>

          <CTAButton />

        </div>
      </div>

    </div >
  )
}

export default ChooseUs
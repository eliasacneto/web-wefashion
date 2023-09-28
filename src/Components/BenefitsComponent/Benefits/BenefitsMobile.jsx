import React from 'react';
import yellowImg from './../../../assets/WeFashion-img-yellow.svg';
import iconCheck from './../../../assets/icon-check.svg';
import whattsIcon from './../../../assets/whatsapp.png';
import './BenefitsMobile.scss'

const BenefitsMobile = () => {
  return (
    <div className='benefitsMobile'>
        <div className='benefitsMobile__content'> 
            <h1 className='benefitsMobile__content-title'>Descubra o estilo em cada ponto</h1>            
            <div className='benefitsMobile__content-benefits'>
                <img src={iconCheck} alt="" /> <h2>Um professor especialista em modelagem</h2>
            </div>
            <div className='benefitsMobile__content-benefits'>
                <img src={iconCheck} alt="" /> <h2>Um professor especialista em corte e costura</h2>
            </div>
            <div className='benefitsMobile__content-benefits'>
                <img src={iconCheck} alt="" /> <h2>Maquinárino e mesa para treino agendado</h2>
            </div>
            <div className='benefitsMobile__content-benefits'>
                <img src={iconCheck} alt="" /> <h2>Temos lojas com todo material necessário para o curso</h2>
            </div>

            <h4 className='benefitsMobile__content-h4'>Converse conosco para transformar sua paixão em habilidades de costura!</h4>
            
            <button className='btn-whatts'><img src={whattsIcon} alt="" />Fale conosco </button>
        </div>

        <div className='benefitsMobile__img'>
            <img src={yellowImg} alt="Erro-img" />
        </div>

    </div>
  )
}

export default BenefitsMobile
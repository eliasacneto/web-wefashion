import React from 'react';
import yellowImg from './../../assets/WeFashion-img-yellow.svg';
import './Benefits.scss';

const Benefits = () => {
    return (
        <div className='benefits'>
            <div className='benefits-content'>
                <div className='benefits-left'>
                    <div className='benefits-title'>
                        <h1 className='b-title'>
                            <span className='highlight'>We</span>Fashion, sua jornada de <u className='underlight'>moda</u> começa aqui<span className='highlight'>!</span>
                        </h1>
                    </div>
                    <div className='benefits-subtitle'>
                        <p className='b-subtitle'>Afinal, costura é uma expressão de arte que transcende as gerações!</p>
                    </div>
                    <div className='cta-btn'>
                        <button className='btn-cta'>Conheça nossa escola</button>
                        <button className='btn-cta2'>Nossos cursos</button>
                    </div>
                </div>
                <div className='benefits-right'>
                    <img className='benefits-img' src={yellowImg} alt='Erro-img' />
                </div>
            </div>
        </div>
    );
};

export default Benefits;

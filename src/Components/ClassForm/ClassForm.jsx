import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../../views/Footer/Footer';
import { itens } from '../../mock/product.mock';
import { Link, useParams } from 'react-router-dom';
import backImg from "../../assets/images/backImg.png"
import "./ClassForm.scss";
import mapPin from "../../assets/images/MapPin.png"
import clock from "../../assets/images/Clock.png"
import users from "../../assets/images/UsersThree.png"
import { Swiper, SwiperSlide } from "swiper/react";
import model31 from "../../assets/images/25.jpg"
import model32 from "../../assets/images/26.jpg"
import weFashionPreto from "../../assets/images/Wefashionpreto.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ClassForm = () => {

    let { id } = useParams();
    const [products] = useState(itens);
    const product = products.find((element) => element.id == id);

  return (
    <div className='classes'>
        <Navbar />
            <Swiper
                slidesPerView={1}
                navigation
                modules={[ Navigation ]}>
                    <SwiperSlide className='carrosel__form'>
                        <div className='classesForm' >
                        
                            <div className='classesForm__description'>
                                <h3 className='classesForm__description-cursoFix'>CURSO</h3>
                                <h1>{product.nome1}</h1>
                                <h1>{product.nome2}</h1>
                                <div className='classesForm__description-spec'>
                                    <div className='classesForm__description-spec-iten'>
                                        <img src={clock}/>
                                        <h5>{product.duração}</h5>
                                    </div>
                                    <div className='classesForm__description-spec-iten'>
                                        <img src={users}/>
                                        <h5>{product.turma}</h5>
                                    </div>
                                    <div className='classesForm__description-spec-iten'>
                                        <img src={mapPin}/>
                                        <h5>{product.tipoLocal}</h5>
                                    </div>
                                </div>
                                <h2 className='classesForm__description-price'>De: {product.preço}</h2>
                                <h2 className='classesForm__description-price'>Por apenas: <h2 className='classesForm__description-price-promo'> {product.promoção}</h2></h2>
                            </div>
                            <div className='classesForm__form'>
                                <p>Inscreva-se agora!</p>
                                <input className='classesForm__form-input' type="text" placeholder='Nome completo'/>
                                <input className='classesForm__form-input' type="text" placeholder='Seu melhor e-mail' />
                                <input  className='classesForm__form-input' type="text" placeholder='Seu Whatsapp'/>
                                <div className='classesForm__form-checkbox'>
                                    <input className='classesForm__form-checkbox-box' type="checkbox" name="" id="" />
                                    <h5 className='classesForm__form-checkbox-txt'>Eu li e aceito os termos e condições da Política de Privacidade e Contrato de Prestação de Serviço</h5>
                                </div>
                                <button className='classesForm__form-btn' type='submit'>
                                    Inscrever-se
                                </button>
                                <Link className='classesForm__form-link' to={`/`}>Voltar para para a página inicial</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carrosel__form'>
                        <div className='classesDescription'>
                            <h1 className='classesDescription__ask'>O que você irá aprender?</h1>
                            <div className='classesDescription__p1'>
                                <div className='classesDescription__p1-p1'>
                                    <h2 className='classesDescription__p1-p1-ti'>
                                        {product.descritit1}
                                    </h2>
                                    <p className='classesDescription__p1-p1-tx'>
                                        {product.descrição1}
                                    </p>
                                </div>
                                <div className='classesDescription__p1-p1'>
                                    <img className='classesDescription__p1-p1-img' src={model31}></img>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='carrosel__form'>
                    <div className='classesDescription'>
                            <h1 className='classesDescription__ask'>O que você irá aprender?</h1>
                            <div className='classesDescription__p1'>
                                <div className='classesDescription__p1-p1'>
                                    <img  className='classesDescription__p1-p1-img' src={model32}></img>
                                </div>
                                <div className='classesDescription__p1-p1'>
                                    <h2 className='classesDescription__p1-p1-ti'>
                                        {product.descritit2}
                                    </h2>
                                    <p className='classesDescription__p1-p1-tx'>
                                        {product.descrição2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>  
                    <SwiperSlide className='carrosel__form'>
                        <div className='classesDuration'>
                            <img className='classesDuration__img' src={weFashionPreto}></img>
                            <div className='classesDuration__p1'>
                                <h1 className='classesDuration__p1-ti'>Duração do curso</h1>
                                <div className='classesDuration__p1-p1'>
                                    <img className='classesDuration__p1-p1-img' src={clock}></img>
                                    <h4 className='classesDuration__p1-p1-tx'>{product.duração}</h4>
                                </div>
                                <div className='classesDuration__p1-p1'>
                                    <img className='classesDuration__p1-p1-img' src={users}></img>
                                    <h4  className='classesDuration__p1-p1-tx'>{product.turma}</h4>
                                </div>
                                <div className='classesDuration__p1-p1'>
                                    <img className='classesDuration__p1-p1-img' src={mapPin}></img>
                                    <h4 className='classesDuration__p1-p1-tx'>{product.tipoLocal}</h4>
                                </div>                                
                            </div>
                        </div>
                    </SwiperSlide>   
            </Swiper>
        <Footer />
    </div>
  )
}

export default ClassForm
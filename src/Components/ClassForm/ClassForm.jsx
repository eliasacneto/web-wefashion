import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../views/Footer/Footer";
import { items } from "../../mock/product.mock";
import { Link, useParams } from "react-router-dom";
import backImg from "../../assets/images/backImg.png";
import "./ClassForm.scss";
import mapPin from "../../assets/icons/map.svg";
import clock from "../../assets/icons/time.svg";
import users from "../../assets/icons/people.svg";
import ButtonYellow from "../../Components/ButtonYellow/ButtonYellow";
import Header from "../../views/Header/Header";
import ChooseUs from "../../views/ChooseUs/ChooseUs";
import Testimonials from "../../views/Testimonials/Testimonials";
import CTAButton from "../CTAButton/CTAButton";
import Courses from "../../views/Courses/Courses";

const ClassForm = () => {
    let { id } = useParams();
    const [products] = useState(items);
    const product = products.find((element) => element.id == id);

    return (
        <div className='classes'>
            <Header />
            <div className='classesForm'>
                <div className='classesForm__description'>
                    <h2 className='classesForm__description-cursoFix'>🔥 Curso em destaque</h2>
                    <h1 className='classesForm__description-h1'>{product.nome1} <br />{product.nome2}</h1>
                    <div className='classesForm__description-spec'>
                        <div className='classesForm__description-spec-item'>
                            <img className='class-icon' src={clock} alt='clock icon' />
                            <h5 className='classesForm__description-spec-item-h5'>{product.duração}</h5>
                        </div>
                        <div className='classesForm__description-spec-item'>
                            <img className='class-icon' src={users} alt='users icon' />
                            <h5 className='classesForm__description-spec-item-h5'>{product.turma}</h5>
                        </div>
                        <div className='classesForm__description-spec-item'>
                            <img className='class-icon' src={mapPin} alt='map pin icon' />
                            <h5 className=''>{product.tipoLocal}</h5>
                        </div>
                    </div>
                    <p className="classesForm__description-about"> {product.descrição2}</p>
                </div>
                <div className='classesForm__form'>
                    <p className='classesForm__form-p'>Inscreva-se agora!</p>
                    <hr className="line-form" />
                    <input
                        className='classesForm__form-input'
                        type='text'
                        placeholder='Nome completo'
                    />
                    <input
                        className='classesForm__form-input'
                        type='text'
                        placeholder='Seu melhor e-mail'
                    />
                    <input
                        className='classesForm__form-input'
                        type='text'
                        placeholder='Seu WhatsApp'
                    />

                    <a href="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es.%20%F0%9F%98%8A" target='_blank' className='form-btn'>
                        <CTAButton>Tenho interesse</CTAButton>
                    </a>
                </div>
            </div>
            <ChooseUs />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default ClassForm;

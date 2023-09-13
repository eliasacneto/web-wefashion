import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../../views/Footer/Footer';
import { itens } from '../../mock/product.mock';
import { useParams } from 'react-router-dom';
import backImg from "../../assets/images/backImg.png"
import "./ClassForm.scss";
import mapPin from "../../assets/images/MapPin.png"
import clock from "../../assets/images/Clock.png"
import users from "../../assets/images/UsersThree.png"

const ClassForm = () => {

    let { id } = useParams();
    const [products] = useState(itens);
    const product = products.find((element) => element.id == id);

  return (
    <div className='classes'>
        <Navbar />
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
                    <input type="text" placeholder='Nome completo'/>
                    <input type="text" placeholder='Seu melhor e-mail' />
                    <input type="text" placeholder='Seu Whatsapp'/>
                    <div className='classsesForm__form-checkbox'>
                        <input type="checkbox" name="" id="" />
                        <h5>Eu li e aceito os termos e condições da Política de Privacidade e Contrato de Prestação de Serviço</h5>
                    </div>
                    <button type='submit'>
                        Inscrever-se
                    </button>
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default ClassForm
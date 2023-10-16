import React, { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../../views/Footer/Footer';
import { itens } from '../../mock/product.mock';
import { Link, useParams } from 'react-router-dom';
import backImg from "../../assets/images/backImg.png"
import "./ClassForm.scss";
import mapPin from "../../assets/images/MapPin.png"
import clock from "../../assets/images/Clock.png"
import users from "../../assets/images/UsersThree.png"

import model31 from "../../assets/images/25.jpg"
import model32 from "../../assets/images/26.jpg"
import weFashionPreto from "../../assets/images/Wefashionpreto.png"

import { ButtonYellow } from '../ButtonYellow/ButtonYellow';


const ClassForm = () => {

    let { id } = useParams();
    const [products] = useState(itens);
    const product = products.find((element) => element.id == id);

    return (
    <div className='classes'>
        <Header />
                        <div className='classesForm' >
                        
                            <div className='classesForm__description'>
                                <h3 className='classesForm__description-cursoFix'>CURSO</h3>
                                <h1 className='classesForm__description-h1'>{product.nome1}</h1>
                                <h1 className='classesForm__description-h1'>{product.nome2}</h1>
                                <div className='classesForm__description-spec'>
                                    <div className='classesForm__description-spec-iten'>
                                        <img className='classesForm__description-spec-iten-img' src={clock}/>
                                        <h5 className='classesForm__description-spec-iten-h5'>{product.duração}</h5>
                                    </div>
                                    <div className='classesForm__description-spec-iten'>
                                        <img className='classesForm__description-spec-iten-img' src={users}/>
                                        <h5 className='classesForm__description-spec-iten-h5'>{product.turma}</h5>
                                    </div>
                                    <div className='classesForm__description-spec-iten'>
                                        <img className='classesForm__description-spec-iten-img' src={mapPin}/>
                                        <h5 className='classesForm__description-spec-iten-h5'>{product.tipoLocal}</h5>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='classesForm__form'>
                                <p className='classesForm__form-p'>Inscreva-se agora!</p>
                                <input className='classesForm__form-input' type="text" placeholder='Como quer ser chamado?'/>
                                <input className='classesForm__form-input' type="text" placeholder='E-mail' />
                                <input  className='classesForm__form-input' type="text" placeholder='Seu whatsapp (xx) xxxxx-xxxx'/>
                                <div className='classesForm__form-checkbox'>
                                    {/*<input className='classesForm__form-checkbox-box' type="checkbox" name="" id="" />
                                   <h5 className='classesForm__form-checkbox-txt'>Eu li e aceito os termos e condições da Política de Privacidade e Contrato de Prestação de Serviço</h5>*/}
                                </div>
                                <ButtonYellow text={'Inscreva-se'}/>
                                <Link className='classesForm__form-link' to={`/`}>Voltar para para a página inicial</Link>
                            </div>
                        </div>
                    
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
                  
                    <div className='classesDescription'>
                            
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
                       
            
        <Footer />
    </div>
  )
}

export default ClassForm

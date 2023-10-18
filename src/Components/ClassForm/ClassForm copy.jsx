// import React, { useState } from "react";

// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../views/Footer/Footer";
// import { items } from "../../mock/product.mock";
// import { Link, useParams } from "react-router-dom";
// import backImg from "../../assets/images/backImg.png";
// import "./ClassForm.scss";
// import mapPin from "/src/assets/icons/map.svg";
// import clock from "/src/assets/icons/time.svg";
// import users from "/src/assets/icons/people.svg";

// import ButtonYellow from "../../Components/ButtonYellow/ButtonYellow";
// import Header from "../../views/Header/Header";
// import ChooseUs from "../../views/ChooseUs/ChooseUs";
// import Testimonials from "../../views/Testimonials/Testimonials";
// import CTAButton from "../CTAButton/CTAButton";
// import Courses from "../../views/Courses/Courses";

// const ClassForm = () => {
//     let { id } = useParams();
//     const [products] = useState(items);
//     const product = products.find((element) => element.id == id);

//     return (
//         <>
//             <Header />
//             <div className='classesForm'>
//                 <div className='classesForm__description'>
//                     <h3 className='classesForm__description-cursoFix'>🔥 Curso em destaque</h3>
//                     <h1 className='classesForm__description-h1'>{product.nome1} <br />{product.nome2}</h1>

//                     <p>{product.descrição2}</p>
//                     <div className='classesForm__description-spec'>
//                         {/* <div className='classesForm__description-spec-item'>
//                             <img
//                                 className='classesForm__description-spec-item-img'
//                                 src={clock}
//                             />
//                             <h5 className='classesForm__description-spec-item-h5'>
//                                 {product.duração}
//                             </h5>
//                         </div>
//                         <div className='classesForm__description-spec-item'>
//                             <img
//                                 className='classesForm__description-spec-item-img'
//                                 src={users}
//                             />
//                             <h5 className='classesForm__description-spec-item-h5'>
//                                 {product.turma}
//                             </h5>
//                         </div>
//                         <div className='classesForm__description-spec-item'>
//                             <img
//                                 className='classesForm__description-spec-item-img'
//                                 src={mapPin}
//                             />
//                             <h5 className='classesForm__description-spec-item-h5'>
//                                 {product.tipoLocal}
//                             </h5>
//                         </div> */}
//                     </div>
//                 </div>
//                 <div className='classesForm__form'>
//                     <p className='classesForm__form-p'>Inscreva-se agora!</p>
//                     <input
//                         className='classesForm__form-input'
//                         type='text'
//                         placeholder='Nome completo'
//                     />
//                     <input
//                         className='classesForm__form-input'
//                         type='text'
//                         placeholder='Seu melhor e-mail'
//                     />
//                     <input
//                         className='classesForm__form-input'
//                         type='text'
//                         placeholder='WhatsApp'
//                     />
//                     <div className='classesForm__form-checkbox'>
//                         <input
//                             className='classesForm__form-checkbox-box'
//                             type='checkbox'
//                             name='news'
//                             id='news'
//                         />
//                         <h5 className='classesForm__form-checkbox-txt'>
//                             Desejo receber contato da escola WeFashion
//                         </h5>
//                     </div>
//                     <Link to="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es.%20%F0%9F%98%8A" target='_blank' className='whats-link'><CTAButton>Tenho interesse</CTAButton></Link>
//                     <Link className='classesForm__form-link' to={`/`}>
//                         Voltar para para a página inicial
//                     </Link>
//                 </div>
//             </div>

//             <ChooseUs />
//             <Testimonials />
//             <Footer />
//         </>
//     );
// };

// export default ClassForm;

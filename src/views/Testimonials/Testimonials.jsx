import React from "react";
import "./Testimonials.scss";
import { ButtonYellow } from "../../Components/ButtonYellow/ButtonYellow";
import Carousel from "../../Components/Carousel/Carousel";

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <div className='left-content'>
        <h1 className='testimonials_title'>
          <span className='highlight'>Nossos</span> alunos 💛
        </h1>
        <p className='testimonials_text'>
          Venha fazer parte da nossa escola de costura e descubra um mundo de
          possibilidades criativas! Nossos alunos estão encantados com a
          experiência de aprender essa arte milenar e transformar tecidos em
          verdadeiras obras de arte.
        </p>
        <ButtonYellow text='Conheça nossos cursos' />
      </div>
      <div className='right-content'>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;

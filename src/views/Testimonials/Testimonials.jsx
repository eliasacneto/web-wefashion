import React from "react";
import "./Testimonials.scss";
import ButtonYellow from "../../Components/ButtonYellow/ButtonYellow";
import Carousel from "../../Components/Carousel/Carousel";
import CarouselMobile from "../../Components/Carousel/CarouselMobile";
import CTAButton from "../../Components/CTAButton/CTAButton";

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <div className='left-content'>
        <h1 className='testimonials_title'>
          O que dizem nossos alunos 💛
        </h1>
        <p className='testimonials_text'>
          Faça você também parte da nossa escola de costura e descubra um mundo de
          possibilidades criativas! Nossos alunos estão encantados com a
          experiência de aprender essa arte milenar e transformar tecidos em
          verdadeiras obras de arte.
        </p>
        <CTAButton>
          Conheça nossos cursos</CTAButton>
      </div>

      <div className='right-content'>
        <div className="desktopTestimonials">
          <Carousel />
        </div>
        <div className="mobileTestimonials">
          <CarouselMobile />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

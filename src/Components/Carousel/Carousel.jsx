import React from "react";
import Model01 from "../../assets/Modelos/lucas.webp";
import Model02 from "../../assets/Modelos/everton.webp";
import P1 from "../../assets/images/p1.jpeg";
import P2 from "../../assets/images/p2.jpeg";
import P3 from "../../assets/images/p3.jpeg";
import P4 from "../../assets/images/p4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  const slidesPerView = window.innerWidth <= 768 ? 1 : 2;

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='right-content'
      >
        <SwiperSlide className='testimonial-carousel-item'>
          <div className='testimonial-container'>
            <img className='student-image' src={P1} alt='aluno' />
            <span className='student-name'>Ana Silva</span>
            <p className='testimonial-description'>
              "A WeFashion me ensinou tudo o que eu precisava para brilhar na indústria da moda. Professores incríveis e oportunidades de estágio únicas fizeram toda a diferença."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-carousel-item'>
          <div className='testimonial-container'>
            <img className='student-image' src={P2} alt='aluno' />
            <span className='student-name'>Carlos Santos</span>
            <p className='testimonial-description'>
              "WeFashion não foi apenas uma escola para mim, foi uma porta de entrada para o mundo da moda. Os professores acreditaram no meu potencial, e as oportunidades de estágio me deram experiência prática."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-carousel-item'>
          <div className='testimonial-container'>
            <img className='student-image' src={P3} alt='aluno' />
            <span className='student-name'>Maria Ferreira</span>
            <p className='testimonial-description'>
              "As salas de aula eram cheias de energia, e os recursos de design eram de alta qualidade. A WeFashion não é apenas uma escola; é um lugar onde os sonhos se transformam em realidade."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-carousel-item'>
          <div className='testimonial-container'>
            <img className='student-image' src={P4} alt='aluno' />
            <span className='student-name'>Luísa Torres</span>
            <p className='testimonial-description'>
              "Minha experiência na WeFashion foi além das minhas expectativas. Os programas abrangentes e a equipe dedicada me deram confiança para seguir meu coração na moda. Se você ama moda, a WeFashion é o lugar perfeito para florescer."


            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

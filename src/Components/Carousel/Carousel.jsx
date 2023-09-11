import React, { useRef, useState } from "react";
// Import Swiper React components
import Model01 from "../../assets/Modelos/lucas.webp";
import Model02 from "../../assets/Modelos/everton.webp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
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
            <img className='student-image' src={Model02} alt='aluno' />
            <span className='student-name'>José Fernandes</span>
            <span className='course-name'>Curso: Tecido Pleno</span>
            <p className='testimonial-description'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-carousel-item'>
          <div className='testimonial-container'>
            <img className='student-image' src={Model02} alt='aluno' />
            <span className='student-name'>João</span>
            <span className='course-name'>Curso: Tecido Pleno</span>
            <p className='testimonial-description'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-carousel-item'>
          <div className='testimonial-container'>
            <img className='student-image' src={Model02} alt='aluno' />
            <span className='student-name'>João</span>
            <span className='course-name'>Curso: Tecido Pleno</span>
            <p className='testimonial-description'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-carousel-item'>
          <div className='testimonial-container'>
            <img className='student-image' src={Model02} alt='aluno' />
            <span className='student-name'>João</span>
            <span className='course-name'>Curso: Tecido Pleno</span>
            <p className='testimonial-description'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

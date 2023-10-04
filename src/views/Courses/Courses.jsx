import React, { Component, useState } from 'react';
import "./Courses.scss";
import { itens } from '../../mock/product.mock'
import Cards from '../../Components/Cards/Cards';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade } from 'swiper/modules';
import { Autoplay, Navigation, Pagination } from "swiper/modules";


export default function Courses() {

    const cardsPerView = window.innerWidth <= 768 ? 1 : 3;
    const [products] = useState(itens);

    return (
        <div className='courses-Container'>
            <div className='courses-Container__Title'>
                <h1>Os <span className='highlight-white'><b>melhores</b></span> cursos para você</h1>
                <h4>Arraste para o lado e confira nossos cursos em destaque</h4>
            </div>

            <div className='courses-Container__Cards'>
                <Swiper className='courses-Container__Cards-swiper'
                    slidesPerView={cardsPerView}
                    loop

                    modules={[Pagination]}
                >
                    {products.map((product) => (
                        <SwiperSlide className='courses-Container__Cards-swiper-slide' key={product.id}>
                            <Cards data={product} key={product.id} />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>

        </div>

    );

}

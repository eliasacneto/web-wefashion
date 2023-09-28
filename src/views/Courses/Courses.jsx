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

        const [products] = useState(itens);

        return (
            <div className='courses-Container'>
                <div className='courses-Container__Title'>
                    <h1>Os melhores cursos</h1>
                    <h2>Cursos em destaque</h2>
                </div>
                
                <div className='courses-Container__Cards'>
                    <Swiper className='courses-Container__Cards-swiper'
                    slidesPerView={3}
                    loop
                    
                    modules={[ Pagination ]}
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

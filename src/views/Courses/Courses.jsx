import React, { useState, useEffect } from 'react';
import "./Courses.scss";
import { itens } from '../../mock/product.mock'
import Cards from '../../Components/Cards/Cards';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";


export default function Courses() {

    function getWindowDimensions() {
        const { innerWidth: width} = window;
        return {width};
    }
    
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
        useEffect(() => {
            function handleResize() {
            setWindowDimensions(getWindowDimensions());
            }
        
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
        return windowDimensions;
    }

    const {width: windowWidth} = useWindowDimensions();
    const cardsPerView = windowWidth <= 850 ? 1 : windowWidth <= 1060 ? 2 : 3;
    const [products] = useState(itens);

    return (
        <div id='Courses' className='courses-Container'>
            <div className='courses-Container__Title'>
                <h1>Os <span className='highlight-white'><b>melhores</b></span> cursos para você</h1>
                <h4>Arraste para o lado e confira nossos cursos em destaque</h4>
            </div>

            <div className='courses-Container__Cards'>
                <Swiper className='courses-Container__Cards-swiper'
                    modules={[Navigation, Pagination]}
                    navigation
                    slidesPerView={cardsPerView}
                    pagination={{ clickable: true }}
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

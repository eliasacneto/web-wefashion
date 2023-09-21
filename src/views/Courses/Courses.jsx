import React, { Component, useState } from 'react';
import "./Courses.scss";
import { itens } from '../../mock/product.mock'
import Cards from '../../Components/Cards/Cards';


export default function Courses() {

        const [products] = useState(itens);

        return (
            <div className='courses-Container'>
                <div className='courses-Container__Title'>
                    <h1>Os melhores cursos</h1>
                    <h2>Cursos em destaque</h2>
                </div>
                <div className='courses-Container__Cards'>
                    {products.map((product) => (
                        <Cards data={product} key={product.id} />
                    ))
                    }
                    
                </div>
            </div>
        );
    
}

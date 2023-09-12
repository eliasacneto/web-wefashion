import React from 'react'

import './Cards.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../../views/Footer/Footer'

const cards = ({data}) => {
    return (
            <div className='cards'>
                <img className='cards__img' src={data.img} alt={data.descrição}/>
                <div className='cards__txt'>
                    <div className='cards__txt-avaliation'>
                        <img className='cards__txt-avaliation-stars' src=''/>
                        <h5 className='cards__txt-avaliation-media'></h5>
                        <h5 className='cards__txt-avaliaton-total'></h5>
                    </div>
                    <h3 className='cards__txt-title'>{data.nome1}</h3>
                    <h3 className='cards__txt-title'>{data.nome2}</h3>
                    <div className='cards__spec'>
                        <div className='cards__spec-spec'>
                            <img className='cards__spec-spec-img' src=''/>
                            <h5 className='cards__spec-spec-txt'></h5>
                        </div>
                        <div className='cards__spec-spec'>
                            <img className='cards__spec-spec-img' src=''/>
                            <h5 className='cards__spec-spec-txt'></h5>
                        </div>
                        <div className='cards__spec-spec'>
                            <img className='cards__spec-spec-img' src=''/>
                            <h5 className='cards__spec-spec-txt'></h5>
                        </div>
                    </div>
                </div>
                <button className='cards__button'> <Link to={`/product/${data.id}`}>Ver mais</Link></button>
            </div>
        
    )
}

export default cards
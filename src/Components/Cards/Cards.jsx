import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Cards.scss";
import starIcon from "/src/assets/icons/star.svg";
import timeIcon from "/src/assets/icons/time.svg";
import peopleIcon from "/src/assets/icons/people.svg";
import mapIcon from "/src/assets/icons/map.svg";
import modelagemImg from "/src/assets/images/modelagem.jpg";
import { items } from '../../mock/product.mock';
import ButtonYellow from '../../Components/ButtonYellow/ButtonYellow';
import CTAButton from '../CTAButton/CTAButton';


export default function Cards({ data }) {

    const [isShown, setIsShown] = useState(false);

    return (
        <div className='cardContainer'

        >

            <div className='card-Box1'
                onMouseEnter={() => setIsShown(true)}
            >
                <div className='card-Box1__Folder'>
                    <img src={modelagemImg} alt="" className='card-Box1__Folder-Img' />

                </div>
                <div className='card-Box1__Assessment'>
                    <p className='card-Box1__Assessment-p'><img src={starIcon} /><img src={starIcon} /><img src={starIcon} /><img src={starIcon} /><img src={starIcon} /> 4.5  (45 avaliações)</p>
                    <div className='card-Box1__Assessment-hs'>
                        <h3 className='card-Box1__Assessment-hs-h3'>{data.nome1}</h3>
                        <h3 className='card-Box1__Assessment-hs-h3'>{data.nome2}</h3>
                    </div>
                    <div className='card-Box1__Assessment-spec'> <img src={timeIcon} /> {data.duração} <img src={peopleIcon} /> {data.turma}  <img src={mapIcon} />{data.tipoLocal}</div>
                </div>
            </div>
            {isShown && (
                <div className='card-Box2'
                    onMouseLeave={() => setIsShown(false)}>
                    <div className='card-Box2__titles'>

                        <h3 className='card-Box2__titles-2'>{data.nome1}</h3>
                        <h3 className='card-Box2__titles-2'>{data.nome2}</h3>
                    </div>
                    <div className='card-Box2__spec'>
                        <img className='card-Box2__spec-img' src={timeIcon} />
                        Duração:
                        {data.duração}
                    </div>
                    <h3 className='card-Box2__description'>
                        {data.descrição1}
                    </h3>
                    <Link className='card-Box1__Folder-Price-link' to={`curso/${data.id}`}><CTAButton children='Tenho interesse!' /></Link>
                </div>
            )}
        </div>
    );
}
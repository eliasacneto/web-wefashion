import React, { Component } from 'react';
import "./Courses.scss";
import starIcon from  "/src/assets/icons/star.svg";
import timeIcon from  "/src/assets/icons/time.svg";
import peopleIcon from  "/src/assets/icons/people.svg";
import mapIcon from  "/src/assets/icons/map.svg";
import modelagemImg from "/src/assets/images/modelagem.jpg"
export default class Courses extends Component {
    render() {
        return (
            <div className='courses-Container'>
                <div className='courses-Container__Title'>
                    <h1>Os melhores cursos</h1>
                    <h2>Cursos em destaque</h2>
                </div>
                <div className='courses-Container__Cards'>
                    <div className='card-Box1'>
                        <div className='card-Box1__Folder'>
                            <img src={modelagemImg} alt="" className='card-Box1__Img' />
                            <button className='card-Box1__Price'>R$0,00</button>
                        </div>
                        <div className='card-Box1__Assessment'>
                            <p><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/> 4.5  (45 avaliações)</p>
                            <h3>Curso Tecido Plano Feminino</h3>
                            <p> <img src={timeIcon}/> 12Meses <img src={peopleIcon}/>7alunos  <img src={mapIcon}/></p>
                        </div>
                    </div>
                    <div className='card-Box1'>
                        <div className='card-Box1__Folder'>
                            <img src={modelagemImg} alt="" className='card-Box1__Img' />
                            <button className='card-Box1__Price'>R$0,00</button>
                        </div>
                        <div className='card-Box1__Assessment'>
                            <p><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/> 4.5  (45 avaliações)</p>
                            <h3>Curso Modelagem</h3>
                            <p> <img src={timeIcon}/> 12 Meses <img src={peopleIcon}/> 15alunos  <img src={mapIcon}/></p>
                        </div>
                    </div>
                    <div className='card-Box1'>
                        <div className='card-Box1__Folder'>
                            <img src={modelagemImg} alt="" className='card-Box1__Img' />
                            <button className='card-Box1__Price'>R$0,00</button>
                        </div>
                        <div className='card-Box1__Assessment'>
                            <p><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/><img src={starIcon}/> 4.5  (45 avaliações)</p>
                            <h3>Curso Tecido Plano Feminino</h3>
                            <p> <img src={timeIcon}/> 6 Meses <img src={peopleIcon}/> 35 alunos  <img src={mapIcon}/></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

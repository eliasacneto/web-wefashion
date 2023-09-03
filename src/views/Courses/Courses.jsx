import React, { Component } from 'react';
import "./Courses.scss"
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
                            <img src="" alt="" className='card-Box1__Img' />
                            <button className='card-Box1__Price'>R$0,00</button>
                        </div>
                        <div className='card-Box1_Assessment'>
                            <p>++++ 4.5  (45 avaliações)</p>
                            <h3>Curso Tecido Plano Feminino</h3>
                            <p> (8)icon (8)icon (8)</p>
                        </div>
                    </div>
                    <div id='card-Box2'>
                        <div className='card-Box2__Description'>
                            <h1>R$0,00</h1>
                            <h3>Curso Tecido Plano Feminino</h3>
                            <p> (8)icon </p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                        <button className='card-Box1__Price2'></button>
                    </div>
                </div>
            </div>
        )
    }
}

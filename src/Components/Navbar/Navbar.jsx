import React from 'react'
import logo from './../../assets/WeFashion2.svg'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__img'>
            <img src={logo} alt="ErroLogo-WeFashion2" />
        </div>
        <div className='navbar__menu'>
            <ul>
                <li>Inicio</li>
                <li>Cursos</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
            <button>Quero ser um aluno</button>
        </div>
    </div>
  )
}

export default Navbar
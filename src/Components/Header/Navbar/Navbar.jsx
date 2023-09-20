import React from "react";
import logo from "./../../../assets/WeFashion2.svg";
import "./Navbar.scss";

const Navbar = () => {

  return (
    <header className='navbarDesk'>
      <div className='navbarDesk__logo'>
        <img src={logo} alt='ErroLogo-WeFashion2' />
      </div>

        <navbar className='navbarDesk__menu desktop'>
          <ul>
            <li>
              <a href=''>Início</a>
            </li>
            <div className='line'></div>
            <li>
              <a href=''>Cursos</a>
            </li>
            <div className='line'></div>
            <li>
              <a href=''>Sobre</a>
            </li>
            <div className='line'></div>
            <li>
              <a href=''>Contato</a>
            </li>
            <div className='line'></div>
          </ul>
          <button>Quero ser um aluno</button>
        </navbar>
    </header>
  );
};

export default Navbar;

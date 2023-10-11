import React from "react";
import weLogo from '../../assets/images/nav-logo.png'
import "./Navbar.scss";
import CTAButton from "../CTAButton/CTAButton";

const Navbar = () => {
  return (
    <header className='navbarDesk'>
      <div className='navbarDesk__logo'>
        <img className='logow' src={weLogo} alt='ErroLogo-WeFashion2' />
      </div>

      <navbar className='navbarDesk__menu desktop'>
        <ul>
          <li>
            <a href='#Home'>Início</a>
          </li>
          <div className='line'></div>
          <li>
            <a href='#Courses'>Cursos</a>
          </li>
          <div className='line'></div>
          <li>
            <a href='#About'>Sobre</a>
          </li>
          <div className='line'></div>
          <li>
            <a href='#Contact'>Contato</a>
          </li>
          <div className='line'></div>
        </ul>
        <CTAButton>Inscreva-se agora</CTAButton>
      </navbar>
    </header>
  );
};

export default Navbar;

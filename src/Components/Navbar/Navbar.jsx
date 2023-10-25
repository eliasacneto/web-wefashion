import React, { useEffect, useState } from "react";
import weLogo from '../../assets/images/nav-logo.png'
import "./Navbar.scss";
import CTAButton from "../CTAButton/CTAButton";
import { Link, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {

  function linkOrAnchor(linkTo, text){
    if(window.location.pathname === '/'){
      return <a href={linkTo}>{text}</a>
    } else {
      return <HashLink to={`/${linkTo}`} ><a>{text}</a></HashLink>
    }
  }

  return (
    <header className='navbarDesk'>
      <div className='navbarDesk__logo'>
        <img className='logo' src={weLogo} alt='ErroLogo-WeFashion2' />
      </div>

      <div className='navbarDesk__menu desktop'>
        <ul>
          <li>{linkOrAnchor('#home','Início')}</li>
          <li>
          {linkOrAnchor('#courses','Cursos')}
          </li>
          <li>
            <a href='#about'>Sobre nós</a>
          </li>
          <li>
            <a href='#contact'>Contato</a>
          </li>
        </ul>
        <Link to="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20me%20inscrever%20em%20um%20dos%20cursos.%20%F0%9F%98%8A" target='_blank' className='whats-link'><CTAButton>
          Quero me matricular!</CTAButton></Link>
      </div>
    </header>
  );
};

export default Navbar;

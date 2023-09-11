import React, { useState } from "react";
import logo from "./../../assets/WeFashion2.svg";
import "./Navbar.scss";
import iconNavbar from "./../../assets/iconNavbar.svg";

const Navbar = () => {
  const [menuView, setMenuView] = useState(false);

  const showMenu = () => setMenuView(!menuView);

  // quando carrega a página no tamanho certo ocorre tudo ok, porém erro de logica quando altera o tamanho da página para celular - desktop
  const canShow = () => {
    const largura = window.innerWidth;
    if (largura > 390) {
      return true;
    }
    if (menuView == true) {
      return true;
    }
    return false;
  };

  return (
    <header className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='ErroLogo-WeFashion2' />
      </div>

      {canShow() && (
        <navbar className='navbar__menu'>
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
      )}
      <img
        className='navbar__icon'
        onClick={showMenu}
        src={iconNavbar}
        alt='ErrorIcon-Menu'
      />
    </header>
  );
};

export default Navbar;

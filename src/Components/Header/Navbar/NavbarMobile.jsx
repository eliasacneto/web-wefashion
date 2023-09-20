import React, { useState } from "react";
import iconNavbar from "./../../../assets/iconNavbar.svg";
import logo from "./../../../assets/WeFashion2.svg";
import "./NavbarMobile.scss";

const NavBarMobile = () => {
    const [menuView, setMenuView] = useState(false);

    const showMenu = () => setMenuView(!menuView);

    return(
        <header className="navbarMobile">
            {menuView && <navbar className='navbarMobile__menu mobile'>
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
            }

            <div className='navbarMobile__logo'>
                <img src={logo} alt='ErroLogo-WeFashion2' />
            </div>

            <img
                className='navbarMobile__icon'
                onClick={showMenu}
                src={iconNavbar}
                alt='ErrorIcon-Menu'
            />
        </header>
    );
}

export default NavBarMobile;
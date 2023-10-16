import React, { useState } from "react";
import iconNavbar from "../../assets/iconNavbar.svg";
import logo from "../../assets/images/nav-logo.png";
import "./NavbarMobile.scss";
import CTAButton from "../CTAButton/CTAButton";

const NavBarMobile = () => {
    const [menuView, setMenuView] = useState(false);

    const showMenu = () => setMenuView(!menuView);

    return (
        <header className='navbarMobile'>
            {menuView && (
                <navbar className='navbarMobile__menu mobile'>
                    <ul>
                        <li>
                            <a href='#Home'>Início</a>
                        </li>
                        <hr />
                        <li>
                            <a href='#Courses'>Cursos</a>
                        </li>
                        <hr />
                        <li>
                            <a href='#About'>Sobre</a>
                        </li>
                        <hr />
                        <li>
                            <a href='#Contact'>Contato</a>
                        </li>
                        <hr />
                    </ul>
                    <CTAButton>Inscreva-se</CTAButton>                    
                </navbar>
            )}

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
};

export default NavBarMobile;

import React, { useState } from "react";
import iconNavbar from "../../assets/iconNavbar.svg";
import logo from "../../assets/images/nav-logo.png";
import "./NavbarMobile.scss";
import CTAButton from "../CTAButton/CTAButton";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
    const [menuView, setMenuView] = useState(false);

    const showMenu = () => setMenuView(!menuView);

    return (
        <header className='navbarMobile'>
            {menuView && (
                <div className='navbarMobile__menu mobile'>
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
                    <Link to="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20me%20inscrever%20em%20um%20dos%20cursos.%20%F0%9F%98%8A" target='_blank' className='whats-link'><CTAButton>
                        Inscreva-se agora</CTAButton></Link>
                </div>
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

export default NavbarMobile;

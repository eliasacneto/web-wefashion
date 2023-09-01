import React from "react";
import weFashionLogo from "../../assets/we-fashion-logo.svg";
import instaIcon from "../../assets/instagram-icon.svg";
import ytIcon from "../../assets/youtube-icon.svg";
import wpIcon from "../../assets/whatsapp-icon.svg"
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__contact">
                <img className="Footer__contact--logo" src={weFashionLogo}></img>
                <div>
                    <p className="Footer__contact--info">© 2023 WE FASHION MODA LTDA <br/>
                    CNPJ: 35.587.878/0001-50</p>
                    <p className="Footer__contact--info"> Rua Leão, 170, Jardim Satélite<br/>São José dos Campos, SP, Brasil</p>
                    <p className="Footer__contact--contact">Fale com a gente: <span>(12) 98888-0301</span><br/>
                    E-mail: <span>wefashion.sjc@gmail.com</span></p>
                </div>
            </div>
            <div id="clickable">
            <div className="Footer__courses">
                <h2>Nossos Cursos</h2>
                <div className="Footer__courses__links">
                    <a href="">Nome do Curso</a>
                    <a href="">Nome do Curso</a>
                    <a href="">Nome do Curso</a>
                </div>
            </div>
            <div className="Footer__useful-links">
                <h2>Links Úteis</h2>
                <div className="Footer__useful-links__links">
                    <a href="">Voltar para o início</a>
                    <a href="">Sobre nós</a>
                    <a href="">Nossos cursos</a>
                    <a href="">Precisa de ajuda?</a>
                    <a href="">Políticas de privacidade</a>
                    <a href="">Termos de uso</a>
                </div>
            </div>
            <div className="Footer__social">
                <h2>Siga-nos</h2>
                <div className="Footer__social--icons">
                    <a href=""><img src={wpIcon} alt="" /></a>
                    <a href=""><img src={instaIcon} alt="" /></a>
                    <a href=""><img src={ytIcon} alt="" /></a>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;

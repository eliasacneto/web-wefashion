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
                <img className="Footer__contact--logo" src={weFashionLogo} alt="Logo da WeFashion"></img>
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
                    <a href=""><img src={wpIcon} alt="Ícone WhatsApp" /></a>
                    <a href=""><img src={instaIcon} alt="Ícone Instagram" /></a>
                    <a href=""><img src={ytIcon} alt="Ícone Youtube" /></a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4312914455236!2d-45.89340992516297!3d-23.22738757903067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4b9137a941cf%3A0x168372b785cf2799!2sWe%20Fashion%20Escola%20de%20Moda!5e0!3m2!1spt-BR!2sbr!4v1693538511009!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
        </footer>
    );
};

export default Footer;

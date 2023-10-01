import React from "react";
import weFashionLogo from "../../assets/we-fashion-logo.svg";
import instaIcon from "../../assets/instagram-icon.svg";
import ytIcon from "../../assets/youtube-icon.svg";
import wpIcon from "../../assets/whatsapp-icon.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__contact">
                <img className="Footer__contact--logo" src={weFashionLogo} alt="Logo da WeFashion"></img>
                <div>
                    <p className="Footer__contact--info"> Rua Leão, 170, Jardim Satélite São José dos Campos, SP, Brasil</p>
                    <p className="Footer__contact--contact">Fale com a gente: <span>(12) 98888-0301</span><br />
                        E-mail: <span>wefashion.sjc@gmail.com</span></p>
                </div>
            </div>
            <div id="clickable">
                <div className="Footer__courses">
                    <h2>Acesso rápido</h2>
                    <div className="Footer__courses__links">
                        <a href="">Voltar ao topo</a>
                        <a href="">Nossos cursos</a>
                        <a href="">Sobre nós</a>
                        <a href="">Contato</a>
                    </div>
                </div>
                <div className="Footer__useful-links">
                    <h2>Links Úteis</h2>
                    <div className="Footer__useful-links__links">
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

                </div>
            </div>
        </footer>
    );
};

export default Footer;

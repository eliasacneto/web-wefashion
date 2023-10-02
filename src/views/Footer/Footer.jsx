import React from "react";
import weFashionLogo from "../../assets/images/we-logo-footer.png";
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
                    <p className="Footer__contact--info">© 2023 WE FASHION MODA LTDA <br />
                        CNPJ: 35.587.878/0001-50</p>
                </div>
            </div>
            <div id="clickable">
                <div className="Footer__courses">
                    <h2>Endereço</h2>
                    <div className="Footer__courses__links">
                        <p> Rua Leão, 170, Jardim Satélite<br />São José dos Campos, SP, Brasil</p>
                    </div>
                </div>
                <div className="Footer__courses">
                    <h2>Mapa do site</h2>
                    <div className="Footer__courses__links">
                        <a href="">Voltar para o início</a>
                        <a href="">Sobre nós</a>
                        <a href="">Nossos cursos</a>
                    </div>
                </div>
                <div className="Footer__useful-links">
                    <h2>Links Úteis</h2>
                    <div className="Footer__useful-links__links">
                        <a href="">Políticas de privacidade</a>
                        <a href="">Termos de uso</a>
                    </div>
                </div>
                <div className="Footer__social">
                    <h2>Acompanhe-nos</h2>
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

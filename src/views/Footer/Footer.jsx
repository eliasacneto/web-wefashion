import React from "react";
import weFashionLogo from "../../assets/images/footer-wf.png";
import instaIcon from "../../assets/instagram-icon.svg";
import ytIcon from "../../assets/youtube-icon.svg";
import wpIcon from "../../assets/whatsapp-icon.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer >
            <div className="Footer">


                <div className="Footer__contact">
                    <img className="Footer__contact--logo" src={weFashionLogo} alt="Logo da WeFashion"></img>
                    <p className="Footer__contact--info">Sua jornada de moda começa aqui!</p>
                    <div>
                        <p className="Footer__contact--info"></p>

                    </div>
                </div>
                <div id="clickable">
                    <div className="Footer__courses">
                        <h3 className="footer-title">Nosso endereço</h3>
                        <div className="Footer__courses__links">
                            <p className="footer-li">Rua Leão, 170, Jardim Satélite<br />São José dos Campos, SP, Brasil</p>
                        </div>
                    </div>
                    <div className="Footer__courses">
                        <h3 className="footer-title">Mapa do site</h3>
                        <div className="Footer__courses__links">
                            <ul className="footer-ul">
                                <li className="footer-li">Voltar para o início</li>
                                <li className="footer-li">Sobre nós</li>
                                <li className="footer-li">Nossos cursos</li>
                                <li className="footer-li">Contato</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer__useful-links">
                        <h3 className="footer-title">Links úteis</h3>
                        <div className="Footer__useful-links__links">
                            <ul className="footer-ul">
                                <li className="footer-li">Políticas de privacidade</li>
                                <li className="footer-li">Termos de uso</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer__social">
                        <h3 className="footer-title">Acompanhe-nos</h3>
                        <div className="Footer__social--icons">
                            <ul className="footer-icons-ul">
                                <li className="footer-icons-li"><img src={wpIcon} alt="Ícone WhatsApp" /></li>
                                <li className="footer-icons-li"><img src={instaIcon} alt="Ícone WhatsApp" /></li>
                                <li className="footer-icons-li"><img src={ytIcon} alt="Ícone WhatsApp" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copy">© 2023 WE FASHION MODA LTDA  -  CNPJ: 35.587.878/0001-50</p>
        </footer>
    );
};

export default Footer;

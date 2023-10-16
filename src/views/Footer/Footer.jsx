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
                            <a href="https://maps.app.goo.gl/7auZP4jPq9pZQY1E8" target="__blank">
                                <p className="footer-li">Rua Leão, 170, Jardim Satélite<br />São José dos Campos, SP, Brasil</p>
                            </a>
                        </div>
                    </div>
                    <div className="Footer__courses">
                        <h3 className="footer-title">Mapa do site</h3>
                        <div className="Footer__courses__links">
                            <ul className="footer-ul">
                                <li className="footer-li"><a href="#Home">Início</a></li>
                                <li className="footer-li"><a href="#About">Sobre nós</a></li>
                                <li className="footer-li"><a href="#Courses">Nossos cursos</a></li>
                                <li className="footer-li"><a href="#Contact">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="Footer__useful-links">
                        <h3 className="footer-title">Links úteis</h3>
                        <div className="Footer__useful-links__links">
                            <ul className="footer-ul">
                                <li className="footer-li">Políticas de privacidade</li>
                                <li className="footer-li">Termos de uso</li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="Footer__social">
                        <h3 className="footer-title">Acompanhe-nos</h3>
                        <div className="Footer__social--icons">
                            <ul className="footer-icons-ul">
                                <li className="footer-icons-li"><a href="https://www.instagram.com/wefashion.sjc/" target="__blank"><img src={instaIcon} alt="Ícone Instagram" /></a></li>
                                <li className="footer-icons-li"><a href="https://wa.me/message/ZTAMFGYB4PGQJ1" target="_blank" rel="noopener noreferrer"></a><img src={wpIcon} alt="Ícone WhatsApp" /></li>
                                <li className="footer-icons-li"><a href="https://www.youtube.com/@wefashionescolademoda-sjc622" target="_blank" rel="noopener noreferrer"><img src={ytIcon} alt="Ícone Youtube" /></a></li>
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

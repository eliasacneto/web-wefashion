import React from "react";
import weFashionLogo from "../../assets/images/footer-wf.png";
import instaIcon from "../../assets/icons/instagram-icon.svg";
import ytIcon from "../../assets/icons/youtube-icon.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer >
            <div className="Footer">


                <div className="Footer__contact">
                    <img className="Footer__contact--logo" src={weFashionLogo} alt="Logo da WeFashion"></img>
                    <p className="Footer__contact--info">Sua jornada de moda começa aqui!</p>
                    <div>

                    </div>
                </div>
                <div id="clickable">
                    <div className="Footer__courses">
                        <h3 className="footer-title">Nosso endereço</h3>
                        <div className="Footer__courses__links">
                            <a href="https://maps.app.goo.gl/7auZP4jPq9pZQY1E8" target="__blank">
                                <p title="Ir até o endereço" className="footer-li">Rua Leão, 170, Jardim Satélite<br />São José dos Campos, SP, Brasil</p>
                            </a>
                        </div>
                    </div>
                    <div className="Footer__courses">
                        <h3 className="footer-title">Mapa do site</h3>
                        <div className="Footer__courses__links">
                            <ul className="footer-ul">

                                <li><a className="footer-li" href="#courses">Cursos</a></li>
                                <li><a className="footer-li" href="#about">Sobre nós</a></li>
                                <li><a className="footer-li" href="#contact">Contato</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="Footer__useful-links">
                        <h3 className="footer-title">Links úteis</h3>
                        <div className="Footer__useful-links__links">
                            <ul className="footer-ul">
                                <li><a className="footer-li" href="#courses">Políticas de privacidade</a></li>
                                <li><a className="footer-li" href="#courses">Termos de uso</a></li>
                                <li><a className="footer-li" href="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es.%20%F0%9F%98%8A" target="_blank">Dúvidas</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="Footer__social">
                        <h3 className="footer-title">Acompanhe-nos</h3>
                        <div className="Footer__social--icons">
                            <ul className="footer-icons-ul">
                                <li className="footer-icons-li"><a href="https://www.instagram.com/wefashion.sjc/" target="__blank"><img src={instaIcon} alt="Ícone Instagram" /></a></li>
                                <li className="footer-icons-li"><a href="https://www.facebook.com/wefashion.sjc/" target="_blank"><img src={facebookIcon} alt="Ícone Facebook" /></a></li>
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

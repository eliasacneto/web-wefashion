import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";
import Arrow from '../../assets/icons/arrowup.svg'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adicione um ouvinte de evento para verificar a posição da janela ao rolar
    window.addEventListener("scroll", toggleVisibility);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button className='scroll-to-top' onClick={scrollToTop}>
          <img src={Arrow} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;

import React , { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

import logo from '../../assets/fake-data/logo';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__body">
                      <Link to="/">
                        <img src={logo} alt="ESCALE" data-aos="fade-down" />
                      </Link>
                        
                        <p className="desc fs-18" data-aos="fade-up">
                        Nuestros helados son de alta calidad. Ofrecemos una amplia variedad de sabores, desde los palitos y cremas heladas hasta nuestros famosos sandwichitos y achilata, siempre garantizando una experiencia de sabor única y deliciosa.
                            </p>
                        <ul className="social">
                            <li data-aos="fade-up" data-aos-duration="1200"><a href="https://walink.co/fa8004" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                            <li data-aos="fade-up" data-aos-duration="1200"><a href="https://www.instagram.com/fricaphelados/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li> 
                            <li data-aos="fade-up" data-aos-duration="1200"><a href="https://www.facebook.com/FricapHelados" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>                                                       
                        </ul>
                    </div>
                    <div className="footer_bottom">
                        <p className="fs-16">Copyright © 2023 FRICAP. Diseñado por <n/>
                           <a href="https://escalewebs.online" target="_blank" rel="noreferrer">ESCALE</a>
                        </p>                       
                    </div>
                </div>
            </div>
        </footer>
        {
            isVisible && 
            <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
        }</>
        
    );
}

export default Footer;
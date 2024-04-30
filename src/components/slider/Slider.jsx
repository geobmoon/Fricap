import React , {useState } from 'react';


const Slider = () => {

    const [datatext] = useState({
        subtitle: 'FRICAP HELADOS Y ACHILATA',
        title: 'LO MEJOR DE NOSOTROS, PARA VOS ',
        desc: 'Helados industriales de alta calidad'
    })

    return (
    
    <section className="tf-section hero-slider">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-md-12 col-12">
                    <div className="block-text pt-24" >
                        <h6 className="sub-title mb-6" data-aos="fade-up">{datatext.subtitle}</h6>
                        <h2 className="title mb-26" data-aos="fade-up">{datatext.title} </h2>
                        <p className="desc mb-43" data-aos="fade-up">{datatext.desc} </p>
                        <a href="https://walink.co/fa8004" target="_blank" rel="noopener noreferrer" className="btn-action style-2" data-aos="fade-up" data-aos-duration="1200" >Contactanos</a>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12 col-12">
                    <div className="first-section" data-aos="zoom-in" data-aos-duration="2000">               
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}



export default Slider;
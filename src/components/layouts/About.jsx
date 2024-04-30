import { React , useState } from 'react';
import item from '../../assets/fake-data/item';

const About = () => {

    const [data] = useState(
        {
            subtitle: 'Somos un clásico',
            title: 'Sobre Nosotros',
            desc1: 'Somos una heladería familiar tucumana con más de 30 años de experiencia en la elaboración de helados, achilatas y postres, reconocidos por nuestra excelente calidad y servicio, al mejor precio.',
            desc2: 'Nuestro propósito es ser la heladería favorita de todos, y transformar tus momentos en experiencias únicas.',
        }
    )

    return (
        <section className="tf-section section-about"  id='nosotros'>
            <div className="container">
                <div className="row reverse">
                    <div className="col-xl-7 col-md-12">
                        <div className="group-image">
                            <div className="left">
                                <div className="item bg-1"><img src={item.item8} alt="tienda Online" /></div>
                            </div>
                            <div className="right">
                                <div className="item bg-2"><img src={item.item9} alt="compra Online" /></div>
                                <div className="item bg-3"><img src={item.item10} alt="compra Movil" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <div className="block-text pt-12">
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                            <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                            <p className="desc1 fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>
                            <p className="desc2 fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration="1000">{data.desc2}</p>
                            <a href="https://walink.co/fa8004" target="_blank" rel="noopener noreferrer" className="btn-action style-2" data-aos="fade-up" data-aos-duration="1200" >Contactanos</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
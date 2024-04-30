import React from 'react';

const Contact = () => {
    return (
        <div className='page-contact' id='contacto'>             
            <section className="tf-section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Contacto</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Vendé Fricap en tu local</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Completá el formulario y<br /> nos pondremos en contacto con vos.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-left">
                                <ul>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="info">
                                            <h5>Dirección</h5>
                                            <p className="fs-18">Frias Silva 453, Barrio Ciudadela, San Miguel <br/>de Tucumán, Provincia de Tucumán.</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                        <div className="info">
                                            <h5>Telefónos</h5>
                                            <p className="fs-18">4230563 (Fijo)</p>  
                                            <p className="fs-18">3814882955 (whatsapp)</p>
                                            <p className="fs-18">3812032277 (whatsapp)</p>                                         
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i class="fas fa-watch"></i></div>
                                        <div className="info">
                                            <h5>Horarios de Atención</h5>
                                            <p className="fs-18">Lunes a Sábado de 09 a 20h.</p>
                                            <p className="fs-18">Domingos y Feriados 10 a 18h.</p>
                                            <p className="fs-18">Hacemos envíos a domicilio y estamos en PedidosYa.</p> 
                                        </div>
                                    </li>                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="contact__form" action="https://formsubmit.co/fricap89@gmail.com" method="POST">

                                <div className="form-group">
                                    <input className="form-control" id="nombre" name="nombre"  type="text" placeholder="Tu nombre" required />
                                    <input className="form-control mr-0"  id="email" name="email" type="email" placeholder="Tu email" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="celular" name="celular" type="text" placeholder="Tu celular" required />
                                    <input className="form-control mr-0" id="motivo" name="motivo" type="text" placeholder="Motivo"></input>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="mensaje" name="mensaje" rows="3" placeholder="Tu mensaje aquí"></textarea>
                                </div>
                                <button type="submit" className="btn-action style-2"><span>Enviar</span></button>
                            </form>
                        </div>
                    </div>                    
                </div>                
            </section>

            <section className="map">
                <div className="container">
                    <div className="col-12">
                        <p data-aos="fade-up"><iframe title='map' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Frias%20Silva%20453,%20San%20miguel%20de%20Tucum%C3%A1n+(escal-E)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="450"  allowFullScreen="" loading="lazy"></iframe></p>
                    </div>
                </div>
            </section>
         
        </div>
    );
}

export default Contact;
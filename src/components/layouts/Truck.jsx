import React from 'react';
import webTotalCel from '../../assets/images/pages/webTotalCel3.png'

const Truck = () => {
    return (
        <div className='service' id='truck'>
            <section className="tf-section services">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Food Truck para Eventos</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">El servicio incluye</h3>
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                <li><i className="fa fa-check"></i><p className="fs-18">Traslado del Food al evento</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Personal para servir a los invitados</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">8 sabores de Helado a elección, servidos en 2 Bochas sobre Capelinas con agregados
                                     de Microgalletas, Obleas, Toppings y Salsas</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">El Achilata será servida en 2 Bochas sobre Conos comestibles</p></li>                       
                                    <li><i className="fa fa-check"></i><p className="fs-18">Opcionalmente, podrá solicitar Palitos Helados (ideal para eventos con niños)</p></li>
                                    <h5 className="title mb-8" data-aos="fade-up" data-aos-duration="1000">El presupuesto mínimo es para 100 Personas, o su equivalente en dinero.</h5>
                                    <li><i></i><p className="fs-18">El precio por persona es:</p></li>
                                    <li><i className="fa fa-user" aria-hidden="true"></i><p className="fs-10">1 a 100 Personas = $550</p></li>
                                    <li><i className="fa fa-user" aria-hidden="true"></i><p className="fs-18">100 a 200 Personas = $520</p></li>
                                    <li><i className="fa fa-user" aria-hidden="true"></i><p className="fs-18">200 Personas o más = $500</p></li>
                                    <li><i class="fa fa-users" aria-hidden="true"></i><p className="fs-18">Podes consultar un presupuesto especial para otras cantidades   </p></li>                            
                               </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <img src={webTotalCel} alt="WebMovil" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
        </div>
    );
}

export default Truck;
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section portfolio" id='productos'>
            <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">                               
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Refrescante y Delicioso</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Tenemos una gran variedad<br /> de productos</h3>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="container-fluid">
                <Swiper
                    className='swiper-portfolio s1'
                    modules={[ Autoplay ]}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                          },
                        767: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 4,
                        },
                    }}
                    loop
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed= {2000}
                >
                    {
                        data.map((data,index) => (
                            <SwiperSlide key={index}><div className="item bg-4"><img src={data.img} alt="Monteno" /></div></SwiperSlide>
                        ))
                    }

                </Swiper>

                <Swiper
                    modules={[ Autoplay ]}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                          },
                        767: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 5,
                        },
                    }}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                    }}
                    speed= {2000}
                >

                    {
                        data.map((data,index) => (
                            <SwiperSlide key={index}><div className="item bg-4"><img src={data.img} alt="Monteno" /></div></SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
            
            
        </section>
    );
}

export default Portfolio2;
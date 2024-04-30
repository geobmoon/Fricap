import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider';
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';
import Truck from '../components/layouts/Truck'
import About from '../components/layouts/About';
import Contact from '../components/layouts/Contact';
import Productos from '../components/layouts/Productos';
import dataProductos from '../assets/fake-data/data-productos';


const Home = () => {
  return (
    <div className='home-3'>
        <Header />
        <Slider />
        <About /> 
        <Productos data={dataProductos} />   
        <Truck />
        <Contact />      
        <ButtonWhatsapp/>
        <Footer />
    </div>
  );
}

export default Home;
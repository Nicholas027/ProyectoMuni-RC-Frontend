import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="https://chequeado.com/wp-content/uploads/2023/04/Trabajadores.png"
            alt=""
            className="w-100 imgCarousel"
          />
          <Carousel.Caption>
            <h3 className='display-3'>Servicios de Primera Calidad</h3>
            <p>Red de trabajo permite elegir a los profesionales más destacados de una amplia variedad de rubros</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.prosegsa.com.mx/wp-content/uploads/2020/09/seguridad_ok15a7d8e156fa97-min-1030x515.jpg"
            alt=""
            className="w-100 imgCarousel"  
          />
          <Carousel.Caption>
            <h3 className='display-3'>Incentivando el trabajo entre la comunidad</h3>
            <p>Red de trabajo es una herramienta que puede impulsar el trabajo de todos los vecinos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.ambitojuridico.com/sites/default/files/styles/imagen_800x400/public/trabajadores-fabrica-mujerfreepik.jpg.webp?itok=BHQVRwxa"
            alt=""
            className="w-100 imgCarousel"
          />
          <Carousel.Caption>
            <h3 className='display-3'>Vecinos ayudando a Vecinos</h3>
            <p>
              Conectamos a cada vecino con cada profesional que requiera
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default CarouselComponent;
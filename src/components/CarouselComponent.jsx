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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.prosegsa.com.mx/wp-content/uploads/2020/09/seguridad_ok15a7d8e156fa97-min-1030x515.jpg"
            alt=""
            className="w-100 imgCarousel"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.ambitojuridico.com/sites/default/files/styles/imagen_800x400/public/trabajadores-fabrica-mujerfreepik.jpg.webp?itok=BHQVRwxa"
            alt=""
            className="w-100 imgCarousel"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default CarouselComponent;
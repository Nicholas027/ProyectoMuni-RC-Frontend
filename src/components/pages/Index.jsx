import { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import "../../styles/index.css";

const Index = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <section>
      <article>
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
              src="https://chequeado.com/wp-content/uploads/2023/04/Trabajadores.png"
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
              src="https://chequeado.com/wp-content/uploads/2023/04/Trabajadores.png"
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
      </article>
      <article>
        <Container>
          <h1>Hola Mundo</h1>
        </Container>
      </article>
    </section>
  );
};

export default Index;

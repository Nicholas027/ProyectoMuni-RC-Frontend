import { Container } from "react-bootstrap";
import "../../styles/index.css";
import CarouselComponent from "../CarouselComponent";
import logo from "../../assets/logo_muni_vertical_AZUL.png";
import CategoryGrid from "../CategoryGrid";

const Index = () => {
  return (
    <section>
      <CarouselComponent />

      <article className="aboutContainer">
        <Container>
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="logo de la municipalidad de Concepción"
              className="img-fluid"
              width={300}
            />
            <div className="ms-5">
              <h2 className="display-6">¿Qué es Red de Trabajo?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                odit tempore. Corrupti repudiandae inventore quam aspernatur
                unde tempore, facilis laborum voluptas distinctio qui quae
                beatae optio delectus consectetur illum atque?
              </p>
            </div>
          </div>
        </Container>
      </article>

      <Container className="mt-5 categorySelect">
        <h2 className="display-5 text-center">Categorias de Profesional</h2>
        <CategoryGrid></CategoryGrid>
      </Container>

    </section>
  );
};

export default Index;

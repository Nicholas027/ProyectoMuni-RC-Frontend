import { Container } from "react-bootstrap";
import "../../styles/index.css";
import CarouselComponent from "../CarouselComponent";
import logo from "../../assets/logo_muni_vertical_AZUL.png";
import CategoryGrid from "../CategoryGrid";

const Index = () => {
  return (
    <section>
      <CarouselComponent />

      <Container className="mb-5">
        <div className="brandContainer">
          <img
            src={logo}
            alt="logo de la municipalidad de Concepción"
            className="img-fluid"
            width={300}
          />
          <div className="mx-2">
            <h2 className="display-6">¿Qué es Red de Trabajo?</h2>
            <p>
              Red de Trabajo Concepción promueve la interacción fluida entre profesionales de diversas
              disciplinas y usuarios interesados en sus servicios. El objetivo
              primordial es crear un entorno digital que simplifique la
              búsqueda, presentación y contacto entre ambas partes, fomentando
              así la creación de conexiones valiosas y beneficiosas para ambas
              partes
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-5 categorySelect">
        <h2 className="display-4 text-center">Categorías de Profesionales</h2>
        <CategoryGrid></CategoryGrid>
      </Container>
    </section>
  );
};

export default Index;

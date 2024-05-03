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
            <h2 className="display-6 text-center mt-5 mb-3">
              ¡Bienvenidos al Portal de Oficios de la Municipalidad de
              Concepción!
            </h2>
            <p>
              Iniciativa del Gobierno Municipal que permite conectar a
              profesionales de una variedad de rubros con ciudadanos en búsqueda
              de servicios.
            </p>
            <p>
              El Portal de Oficios Concepción facilita la interacción fluida
              entre profesionales de diversas disciplinas y usuarios interesados
              en sus servicios. El objetivo principal es crear un entorno
              digital que simplifique la búsqueda, presentación y contacto entre
              ambas partes, promoviendo las oportunidades del sector trabajador.
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

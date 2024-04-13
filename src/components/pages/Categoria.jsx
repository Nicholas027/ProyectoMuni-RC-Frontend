import { Container, Row, Dropdown } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";
import "../../styles/categoria.css";

const Categoria = () => {
  return (
    <Container className="mainSection my-5">
      <h1 className="text-center tituloCategoria">ELECTRICISTAS</h1>
      <Dropdown className="d-flex justify-content-end">
        <Dropdown.Toggle variant="secondary" id="dropdownCategorias" size="sm">
          CATEGORÍAS
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdownMenu">
          <Dropdown.Item href="#/carpinteros">Carpinteros</Dropdown.Item>
          <Dropdown.Item href="#/gasistas">Gasistas</Dropdown.Item>
          <Dropdown.Item href="#/cerrajeros">Cerrajeros</Dropdown.Item>
          <Dropdown.Item href="#/mecanicos">Mecánicos</Dropdown.Item>
          <Dropdown.Item href="#/electricistas">Electricistas</Dropdown.Item>
          <Dropdown.Item href="#/albaniles">Albañiles</Dropdown.Item>
          <Dropdown.Item href="#/plomeros">Plomeros</Dropdown.Item>
          <Dropdown.Item href="#/pintores">Pintores</Dropdown.Item>
          <Dropdown.Item href="#/herreros">Herreros</Dropdown.Item>
          <Dropdown.Item href="#/jardineros">Jardineros</Dropdown.Item>
          <Dropdown.Item href="#/otros">Otro</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row className="my-4">
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
        <CardProfesional />
      </Row>
    </Container>
  );
};

export default Categoria;

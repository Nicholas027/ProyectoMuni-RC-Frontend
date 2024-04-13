import { Container, Row } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";
import "../../styles/categoria.css";

const Categoria = () => {
  return (
    <Container className="mainSection my-5">
      <h1 className="text-center tituloCategoria">Electricistas</h1>
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

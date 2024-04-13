import { Container, Row } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";
import EstrellasCalificaciones from "./profesional/EstrellasCalificaciones";

const Categoria = () => {
  return (
    <Container className="mainSection my-5">
      <h1 className="text-center tituloCategoria">Electricistas</h1>
      <EstrellasCalificaciones />
      <Row className="my-4">
        <CardProfesional />
      </Row>
    </Container>
  );
};

export default Categoria;

import { Container, Row, Col } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";

const Categoria = () => {
  return (
    <Container className="mainSection my-5">
      <h1 className="text-center tituloCategoria">Electricistas</h1>
      <Row className="my-4">
        <Col><CardProfesional/></Col>
      </Row>
    </Container>
  );
};

export default Categoria;

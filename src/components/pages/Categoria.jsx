import { Container, Row, Col } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";

const Categoria = () => {
  return (
    <Container className="mainSection">
      <h1 className="text-center">Electricistas</h1>
      <Row>
        <Col><CardProfesional/></Col>
      </Row>
    </Container>
  );
};

export default Categoria;

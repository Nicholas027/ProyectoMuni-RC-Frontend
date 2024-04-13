import Card from "react-bootstrap/Card";
import { Col, Image, Button } from "react-bootstrap";

const CardProfesional = () => {
  return (
    <Col>
      <Card className="h-100 text-center cardProfesional">
        <div>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            alt="nombre del profesional de la foto"
            className="my-3"
            width={200}
            roundedCircle
          />
        </div>
        <Card.Body>
          <Card.Title>
            <span className="nombreProfesionalCard">
              Nombre del profesional
            </span>
          </Card.Title>
          <Card.Subtitle>
            <span className="categoriaProfesionalCard">
              Categoría del profesional
            </span>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="outline-dark"
          >
            <i className="bi bi-plus-circle"></i>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProfesional;

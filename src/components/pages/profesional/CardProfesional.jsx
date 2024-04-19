import Card from "react-bootstrap/Card";
import { Col, Image, Button } from "react-bootstrap";
import EstrellasCalificaciones from "./EstrellasCalificaciones";
import { Link } from "react-router-dom";

const CardProfesional = ({ profesional }) => {
  return (
    <Col
      className="my-2 d-flex justify-content-center"
      xs={12}
      sm={6}
      md={6}
      lg={4}
    >
      <Card className="h-100 text-center cardProfesional">
        <div>
          <Image
            src={profesional.foto}
            alt={profesional.nombreCompleto}
            className="my-3"
            width={200}
            roundedCircle
          />
        </div>
        <Card.Body>
          <Card.Title>
            <span className="nombreProfesionalCard">
              {profesional.nombreCompleto}
            </span>
          </Card.Title>
          <Card.Subtitle>
            <span className="categoriaProfesionalCard">
              {profesional.categoria}
            </span>
          </Card.Subtitle>
          <Card.Text>
            <EstrellasCalificaciones />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link
            className="btn btn-outline-dark"
            to={"/categorias/"+profesional.categoria+"/profesional/"+profesional._id}
          >
            Ver más <i className="bi bi-plus-circle"></i>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProfesional;

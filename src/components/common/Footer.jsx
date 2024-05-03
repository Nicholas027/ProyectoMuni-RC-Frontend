import logo from "../../assets/logo_muni_vectorized.png";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-light text-center py-5">
      <img
        src={logo}
        alt="Logo de la municipalidad de Concepción"
        className="img-fluid"
        width={500}
      />
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <ul className="text-center my-3">
              <li className="list-unstyled my-4 textoResaltado">
                REGISTRACIÓN Y ALTA DEL PROFESIONAL EN DIRECCIÓN DE SERVICIOS DE
                EMPLEO.
              </li>
              <li className="list-unstyled my-4">
                <span className="textoResaltado">UBICACIÓN:</span> OFICINA 13,
                TERMINAL DE ÓMNIBUS.
              </li>
              <li className="list-unstyled my-4">
                <span className="textoResaltado">HORARIO:</span> 08.00 A 13.00
                HS
              </li>
              <li className="list-unstyled my-4">
                <span className="textoResaltado">TELÉFONO:</span> 3865-228147
              </li>
            </ul>
          </Col>
          <Col className="mt-4 iconsFooter" lg="6" sm="12">
            <p className="contactoFooter">CONTACTO:</p>
            <a href="https://twitter.com/Concepcion_Tuc" target="_blank">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://www.facebook.com/municipalidadeconcepcion"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/municipalidadconcepcion"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@municipalidadconcepcion9109"
              target="_blank"
            >
              <i className="bi bi-youtube"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5493865228080&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="mailto:prensa@concepcion.gob.ar" target="_blank">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <p className="text-center fraseFooter mt-5">
              ESTAMOS TRABAJANDO PARA VOS.
            </p>
          </Col>
        </Row>
      </Container>

      <p className="text-center mt-5 copyright">
        &copy; Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

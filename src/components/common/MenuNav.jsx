import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo_muni_vertical_AZUL.png";
import { Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";

const MenuNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="/">
          <Row className="align-items-center">
            <Col>
              <img
                src={logo}
                alt="logo de la municipalidad de Concepción"
                className="img-fluid"
                width={100}
              />
            </Col>
            <Col className="navTitulo text-center">
              PORTAL DE OFICIOS <br /> CONCEPCIÓN
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center d-flex align-items-center navLinks">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/signup">REGISTRARSE</Nav.Link>
            <Nav.Link href="/about">NOSOTROS</Nav.Link>
            <Nav.Link href="/administrador">PANEL DE ADMINISTRADOR</Nav.Link>
            <Nav.Link href="/selectSigninMethod">
              <i className="bi bi-box-arrow-in-right"></i> INGRESAR
            </Nav.Link>
            <SearchBar/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNav;

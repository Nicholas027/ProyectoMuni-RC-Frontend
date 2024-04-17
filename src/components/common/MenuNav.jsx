import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo_muni_vertical_AZUL.png";

const MenuNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo de la municipalidad de Concepción"
            className="img-fluid"
            width={100}
          />
          <span className="navTitulo">RED DE TRABAJO</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center d-flex align-items-center navLinks">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/signup">REGISTRARSE</Nav.Link>
            <Nav.Link href="/about">NOSOTROS</Nav.Link>
            <Nav.Link href="/signin">
              <i className="bi bi-box-arrow-in-right"></i> INGRESAR
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNav;

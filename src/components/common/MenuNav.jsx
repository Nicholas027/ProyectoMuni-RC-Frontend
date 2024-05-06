import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo_muni_vertical_AZUL.png";
import { Col, Row, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const MenuNav = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const navegacion = useNavigate();

  const logout= ()=>{
    //modificar 'usuario' segun como lo vaya a llamar en el session storage
    sessionStorage.removeItem('usuario')
    setUsuarioLogueado('')
    navegacion('/')
  }

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
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center d-flex align-items-center navLinks">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/about">NOSOTROS</Nav.Link>
            {usuarioLogueado !== "" ? (
              <>
                <Nav.Link href="/administrador">
                  PANEL DE ADMINISTRADOR
                </Nav.Link>
                <Nav.Link href="/professionalProfile">MI PERFIL</Nav.Link>
                <Button className="nav-link" variant="link"><i className="bi bi-box-arrow-left" onClick={logout}></i> SALIR</Button>
              </>
            ) : (
              <>
                <Nav.Link href="/selectRegisterMethod">REGISTRARSE</Nav.Link>
                <Nav.Link href="/selectSigninMethod">
                  <i className="bi bi-box-arrow-in-right"></i> INGRESAR
                </Nav.Link>
              </>
            )}
            <SearchBar />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNav;

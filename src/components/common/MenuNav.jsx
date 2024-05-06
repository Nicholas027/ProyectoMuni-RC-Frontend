import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo_muni_vertical_AZUL.png";
import { Col, Row, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MenuNav = ({ usuarioLogueado, setUsuarioLogueado, usuarioTipo,  }) => {
  // const [usuarioTipo, setUsuarioTipo] = useState("");

  // useEffect(() => {
  //   // Obtener información de inicio de sesión del localStorage al cargar el componente
  //   const usuario = JSON.parse(sessionStorage.getItem("usuario")) || null;
  //   if (usuario) {
  //     setUsuarioLogueado(usuario.email);
  //     setUsuarioTipo(usuario.tipo);
  //   }
  // }, []);

  const navegacion = useNavigate();
  console.log(usuarioLogueado);

  const logout = () => {
    //modificar 'usuario' segun como lo vaya a llamar en el session storage
    sessionStorage.removeItem("usuario");
    setUsuarioLogueado("");
    // setUsuarioTipo("");
    console.log("ejecutando logout");
    navegacion("/");
  };

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
                {usuarioTipo === "profesional" && (
                  <Nav.Link href="/professionalProfile">MI PERFIL</Nav.Link>
                )}
                 {usuarioTipo === "usuario" && (
                  <Nav.Link href="/userProfile">MI PERFIL</Nav.Link>
                )}
                {usuarioTipo === "admin" && (
                  <Nav.Link href="/administrador">
                    PANEL DE ADMINISTRADOR
                  </Nav.Link>
                )}

                <Button className="nav-link" variant="link" onClick={logout}>
                  <i className="bi bi-box-arrow-left"></i> SALIR
                </Button>
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

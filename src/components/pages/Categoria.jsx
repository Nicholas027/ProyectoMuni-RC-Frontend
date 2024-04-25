import { Container, Row, Dropdown, Form, Col } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";
import "../../styles/categoria.css";
import "../../styles/loader.css";
import { useEffect, useState } from "react";
import {
  buscarProfesionalesAPI,
  obtenerCategoriasAPI,
  obtenerProfesionalesCategoriaAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

const Categoria = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const [profesionales, setProfesionales] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarLoader, setMostrarLoader] = useState(true);

  const normalizarString = (string) => {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    setBusqueda("");
    listarProfesionales();
  }, [categoria]);

  useEffect(() => {
    cargarCategorias();
  }, [categoria]);

  const listarProfesionales = async () => {
    try {
      //mostrar el loader
      setMostrarLoader(true);
      const respuesta = await obtenerProfesionalesCategoriaAPI(categoria);
      setProfesionales(respuesta);
      setMostrarLoader(false);
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intenta esta operación en unos minutos",
        icon: "error",
      });
    }
  };

  const cargarCategorias = async () => {
    try {
      const respuesta = await obtenerCategoriasAPI();
      setCategorias(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  const buscarProfesionales = async (searchTerm) => {
    try {
      //mostrar el loader
      setMostrarLoader(true);
      const respuesta = await buscarProfesionalesAPI(categoria, searchTerm);
      setProfesionales(respuesta);
      //ocultar loader
      setMostrarLoader(false);
      console.log(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBusquedaChange = async (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);
    console.log(valorBusqueda);
    buscarProfesionales(normalizarString(valorBusqueda));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    buscarProfesionales(normalizarString(busqueda));
  };

  // const mostrarComponente = mostrarLoader ? (
  //   <div className="wrapper">
  //     <div className="card-loader card-loader--tabs"></div>
  //   </div>
  // ) : (
  //   <Row className="my-4">
  //     {profesionales.length === 0 ? (
  //       <p className="text-center">
  //         No existen profesionales en esta categoría.
  //       </p>
  //     ) : (
  //       profesionales.map((profesional) => (
  //         <CardProfesional key={profesional._id} profesional={profesional} />
  //       ))
  //     )}
  //   </Row>
  // );

  return (
    <Container className="mainSection my-5">
      <h1 className="text-center tituloCategoria">{categoria.toUpperCase()}</h1>
      <Row>
        <Col>
          <Form onSubmit={handleFormSubmit} className="w-75">
            <Form.Group className="mb-3" controlId="formBuscador">
              <Form.Control
                type="text"
                placeholder="Buscar por nombre"
                value={busqueda}
                onChange={handleBusquedaChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Dropdown className="d-flex justify-content-end">
            <Dropdown.Toggle
              variant="secondary"
              id="dropdownCategorias"
              size="sm"
            >
              CATEGORÍAS
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
              {categorias.map((categoria) => (
                <Dropdown.Item
                  key={categoria}
                  onClick={() => navigate(`/categorias/${categoria}`)}
                >
                  {categoria}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {mostrarComponente}
      <Row className="my-4">
        {profesionales.length === 0 ? (
          <p className="text-center">
            No existen profesionales en esta categoría.
          </p>
        ) : (
          profesionales.map((profesional) => (
            <CardProfesional key={profesional._id} profesional={profesional} />
          ))
        )}
      </Row>
    </Container>
  );
};

export default Categoria;

import { Container, Row, Dropdown } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";
import "../../styles/categoria.css";
import { useEffect, useState } from "react";
import {
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
      const respuesta = await obtenerProfesionalesCategoriaAPI(categoria);
      setProfesionales(respuesta);
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
      const respuesta = await buscarProfesionalesAPI(categoria, searchTerm);
      setProfesionales(respuesta);
      console.log(respuesta)
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

  return (
    <Container className="mainSection my-5">
      <h1 className="text-center tituloCategoria">{categoria}</h1>
      <Dropdown className="d-flex justify-content-end">
        <Dropdown.Toggle variant="secondary" id="dropdownCategorias" size="sm">
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

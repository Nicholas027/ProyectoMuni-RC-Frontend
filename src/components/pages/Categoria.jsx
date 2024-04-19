import { Container, Row, Dropdown } from "react-bootstrap";
import CardProfesional from "./profesional/CardProfesional";
import "../../styles/categoria.css";
import { useEffect, useState } from "react";
import {
  obtenerCategoriasAPI,
  obtenerProfesionalesCategoriaAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const Categoria = () => {
  const { categoria } = useParams();

  const [profesionales, setProfesionales] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    listarProfesionales();
  }, [profesionales]);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const listarProfesionales = async () => {
    try {
      const respuesta = await obtenerProfesionalesCategoriaAPI(categoria);
      console.log(respuesta);

      const datos = await respuesta.json();
      setProfesionales(respuesta);
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intenta esta operación en unos minutos",
        icon: "error",
      });
      console.log(profesionales);
      console.log(categoria);
    }
  };

  const cargarCategorias = async () => {
    try {
      const respuesta = await obtenerCategoriasAPI();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setCategorias(datos);
      } else {
        throw new Error("Ocurrió un error al obtener las categorías");
      }
    } catch (error) {
      console.error(error);
      console.log(categorias);
    }
  };

  return (
    <Container className="mainSection my-5">
      <h1 className="text-center tituloCategoria">ELECTRICISTAS</h1>
      <Dropdown className="d-flex justify-content-end">
        <Dropdown.Toggle variant="secondary" id="dropdownCategorias" size="sm">
          CATEGORÍAS
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdownMenu">
          {categorias.map((categoria) => (
            <Dropdown.Item key={categoria}>
              <Link to={"categorias/" + categoria}>{categoria}</Link>
            </Dropdown.Item>
          ))}

          {/* <Dropdown.Item href="#/gasistas">Gasistas</Dropdown.Item>
          <Dropdown.Item href="#/cerrajeros">Cerrajeros</Dropdown.Item>
          <Dropdown.Item href="#/mecanicos">Mecánicos</Dropdown.Item>
          <Dropdown.Item href="#/electricistas">Electricistas</Dropdown.Item>
          <Dropdown.Item href="#/albaniles">Albañiles</Dropdown.Item>
          <Dropdown.Item href="#/plomeros">Plomeros</Dropdown.Item>
          <Dropdown.Item href="#/pintores">Pintores</Dropdown.Item>
          <Dropdown.Item href="#/herreros">Herreros</Dropdown.Item>
          <Dropdown.Item href="#/jardineros">Jardineros</Dropdown.Item>
          <Dropdown.Item href="#/otros">Otro</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
      <Row className="my-4">
        {profesionales.map((profesional) => (
          <CardProfesional key={profesional._id} profesional={profesional} />
        ))}
      </Row>
    </Container>
  );
};

export default Categoria;

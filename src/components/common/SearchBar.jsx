import React, { useState, useRef } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { buscarProfesionalesIndexAPI } from "../../helpers/queries";
import "../../styles/searchBarIndex.css";

const SearchBar = () => {
  const [resultados, setResultados] = useState([]);
  const inputRef = useRef(null);

  const normalizarString = (string) => {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const buscarProfesionales = async (searchTerm) => {
    try {
      const respuesta = await buscarProfesionalesIndexAPI(searchTerm);
      if (Array.isArray(respuesta)) {
        const resultadosFiltrados = respuesta.filter((result) =>
          normalizarString(result.nombreCompleto)
            .toLowerCase()
            .includes(normalizarString(searchTerm).toLowerCase())
        );
        setResultados(resultadosFiltrados);
      } else {
        setResultados([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBusquedaChange = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.trim() === "") {
      setResultados([]);
    } else {
      buscarProfesionales(searchTerm);
    }
  };

  const handleSeleccionarProfesional = () => {
    inputRef.current.value = "";
    setResultados([]);
  };

  return (
    <div className="contenedorBuscador">
      <Form className="w-50 ms-2">
        <Form.Group controlId="formBuscador">
          <Form.Control
            className="inputBusqueda"
            size="sm"
            type="text"
            placeholder="Buscador"
            onChange={handleBusquedaChange}
            ref={inputRef}
          />
        </Form.Group>
      </Form>

      {resultados.length > 0 && (
        <ListGroup className="w-25 me-3 listaDeResultados">
          {resultados.map((resultado) => (
            <ListGroup.Item
              action
              variant="light"
              key={resultado._id}
              onClick={handleSeleccionarProfesional}
            >
              <a
                className="linkProfesionales"
                href={`/categorias/${resultado.categoria}/profesional/${resultado._id}`}
              >
                {resultado.nombreCompleto}
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchBar;

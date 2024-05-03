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
      console.log("Resultados de la búsqueda:", respuesta);
      console.log(searchTerm);
      //Verificar si la respuesta es un arreglo antes de aplicar filter
      if (Array.isArray(respuesta)) {
        const resultadosFiltrados = respuesta.filter((result) =>
          normalizarString(result.nombreCompleto)
            .toLowerCase()
            .includes(normalizarString(searchTerm).toLowerCase())
        );
        setResultados(resultadosFiltrados);
      } else {
        setResultados([]); // Limpiar resultados si la respuesta no es un arreglo
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBusquedaChange = (e) => {
    const searchTerm = e.target.value;
    // Si el término de búsqueda está vacío, limpiar los resultados
    if (searchTerm.trim() === "") {
      setResultados([]);
    } else {
      buscarProfesionales(searchTerm);
    }
  };

  const handleSeleccionarProfesional = () => {
    inputRef.current.value = ""; // Limpiar el input
    setResultados([]); // Limpiar la lista de resultados
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

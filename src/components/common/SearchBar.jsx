import React, { useState, useRef, useEffect } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { obtenerProfesionalesParaBuscador } from "../../helpers/queries";
import "../../styles/searchBarIndex.css";

const SearchBar = () => {
  const [profesionales, setProfesionales] = useState([]);
  const [resultados, setResultados] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerProfesionalesParaBuscador();
        if (Array.isArray(data)) {
          setProfesionales(data);
        } else {
          console.error("La API no devolvió datos en formato de matriz:", data);
        }
      } catch (error) {
        console.error("Error al obtener profesionales:", error);
      }
    };

    fetchData();
  }, []);

  const normalizarString = (string) => {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleBusquedaChange = (e) => {
    const searchTerm = e.target.value.trim();

    if (searchTerm === "") {
      setResultados([]);
    } else {
      const resultadosFiltrados = profesionales.filter((profesional) =>
        normalizarString(profesional.nombreCompleto).includes(normalizarString(searchTerm)) && (!profesional.pendiente)
      );
      setResultados(resultadosFiltrados);
    }
    console.log(resultados)
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
              className="itemLista text-center"
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

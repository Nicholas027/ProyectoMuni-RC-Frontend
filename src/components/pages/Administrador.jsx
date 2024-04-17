import {
  Container,
  Table,
  Button,
  Modal,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProfesionalesAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

import "../../styles/administrador.css";
import useTitle from "../../hooks/useTitle";

const Administrador = () => {
  useTitle("Panel de Administrador");
  const [profesionales, setProfesionales] = useState([]);
  const [fotoCV, setFotoCV] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalFotoPerfil, setShowModalFotoPerfil] = useState(false);
  const [foto, setFoto] = useState(false);

  useEffect(() => {
    obtenerProfesionales();
  }, []);

  const obtenerProfesionales = async () => {
    try {
      const respuesta = await obtenerProfesionalesAPI();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setProfesionales(datos);
      } else {
        throw new Error("Ocurrió un error al obtener los profesionales.");
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  const abrirModal = (foto) => {
    setFotoCV(foto);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setFotoCV("");
    setShowModal(false);
  };

  const abrirModalFotoPerfil = (foto) => {
    setFoto(foto);
    setShowModalFotoPerfil(true);
  };

  const cerrarModalFotoPerfil = () => {
    setFoto("");
    setShowModalFotoPerfil(false);
  };

  return (
    <Container className="mainContainer">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="display-4 admin-title">Profesionales Registrados</h2>
        <Link className="btn btn-primary btn-dar-alta" to="#">
          <i className="bi bi-person-plus"></i> Dar de alta un profesional
        </Link>
      </div>
      <div className="table-responsive table-container">
        <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Foto</th>
              <th>DNI</th>
              <th>CV</th>
              <th>Categoría</th>
              <th>Teléfono</th>
              <th>Mail</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {profesionales.map((profesional) => (
              <tr key={profesional.id} className="text-center">
                <td>#{profesional.id}</td>
                <td>{profesional.nombreCompleto}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => abrirModalFotoPerfil(profesional.foto)}
                    className="btn-blue-outline"
                  >
                    Ver
                  </Button>
                </td>
                <td>{profesional.dni}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => abrirModal(profesional.cv)}
                    className="btn-blue-outline"
                  >
                    Ver
                  </Button>
                </td>
                <td>{profesional.categoria}</td>
                <td>{profesional.telefono}</td>
                <td>{profesional.email}</td>
                <td
                  className={
                    profesional.pendiente ? "text-danger" : "text-success"
                  }
                >
                  <b>
                    {profesional.pendiente ? "Pendiente de alta" : "Activo"}
                  </b>
                </td>
                <td>
                  <DropdownButton id="custom-dropdown" title="Opciones">
                    <Dropdown.Item href="#">Dar alta <i className="bi bi-person-plus-fill"></i></Dropdown.Item>
                    <Dropdown.Item href="#">Borrar <i className="bi bi-trash"></i></Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={showModal} onHide={cerrarModal} className="table-container">
        <Modal.Header closeButton>
          <Modal.Title>Curriculum Vitae</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={fotoCV}
            alt="Foto del Curriculum Vitae"
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showModalFotoPerfil}
        onHide={cerrarModalFotoPerfil}
        className="table-container"
      >
        <Modal.Header closeButton>
          <Modal.Title>Foto del Profesional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={foto} alt="Foto del Profesional" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Administrador;

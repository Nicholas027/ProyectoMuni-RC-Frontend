import {
  Container,
  Table,
  Button,
  Modal,
  Dropdown,
  DropdownButton,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProfesionalesAPI, modificarEstadoProfesionalAPI, borrarProfesionalAPI, obtenerCategoriasAPI} from "../../helpers/queries";
import Swal from "sweetalert2";
import "../../styles/administrador.css";
import useTitle from "../../hooks/useTitle";
import ProfesionalId from "./administrador/ProfesionalId";
import { useNavigate } from "react-router-dom";
import TableSkeletonLoader from "./administrador/Skeleton Loader/TableSkeletonLoader";

const Administrador = () => {
  useTitle("Panel de Administrador");
  const [profesionales, setProfesionales] = useState([]);
  const [fotoCV, setFotoCV] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalFotoPerfil, setShowModalFotoPerfil] = useState(false);
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const [foto, setFoto] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProfesionales();
  }, []);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const handleFiltroEstadoChange = (estado) => {
    setFiltroEstado(estado);
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleFiltroCategoriaChange = (categoria) => {
    setFiltroCategoria(categoria);
  };

  const profesionalesFiltrados = profesionales.filter((profesional) => {
    if (filtroEstado === "activos") {
      if (profesional.pendiente) {
        return false;
      }
    } else if (filtroEstado === "pendientes") {
      if (!profesional.pendiente) {
        return false;
      }
    }
  
    const busquedaNormalizada = busqueda
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const nombreNormalizado = profesional.nombreCompleto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const dni = profesional.dni.toString();
    const emailNormalizado = profesional.email
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const telefono = profesional.telefono.toString();

    return (
        (nombreNormalizado.includes(busquedaNormalizada) ||
    dni.includes(busquedaNormalizada) ||
    emailNormalizado.includes(busquedaNormalizada) ||
    telefono.includes(busquedaNormalizada)) &&
    (filtroCategoria === "" || profesional.categoria === filtroCategoria)
    );
  });

  const cargarCategorias = async () => {
    try {
      const respuesta = await obtenerCategoriasAPI();
      setCategorias(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerProfesionales = async () => {
    try {
      const respuesta = await obtenerProfesionalesAPI();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setProfesionales(datos);
        setLoading(false);
      } else {
        throw new Error('Ocurrió un error al obtener los profesionales.');
      }
    } catch (error) {
      Swal.fire({
        title: 'Ocurrió un error',
        text: 'Intenta esta operación en unos minutos.',
        icon: 'error',
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

  const handleDarAltaProfesional = async (profesionalId, pendiente) => {
    const confirmacion = await Swal.fire({
      title: pendiente ? '¿Estás seguro de dar de alta?' : '¿Estás seguro de dar de baja?',
      text: pendiente ? "Estás a punto de dar de alta al profesional" : "Estás a punto de dar de baja al profesional",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004b81',
      cancelButtonColor: '#d33',
      confirmButtonText: pendiente ? 'Sí, dar de alta' : 'Sí, dar de baja',
      cancelButtonText: 'Cancelar'
    });
    if (confirmacion.isConfirmed) {
      try {
        const nuevoEstado = !pendiente;
        await modificarEstadoProfesionalAPI(profesionalId, nuevoEstado);
        await obtenerProfesionales();
        Swal.fire({
          title: '¡Hecho!',
          text: `El profesional ha sido ${nuevoEstado ? 'dado de baja' : 'dado de alta'} correctamente`,
          icon: 'success'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: `Hubo un error al ${pendiente ? 'dar de alta' : 'dar de baja'} al profesional`,
          icon: 'error'
        });
      }
    }
  };

  const handleBorrarProfesional = async (profesionalId) => {
    const confirmacion = await Swal.fire({
      title: "Estás seguro de borrar a este profesional?",
      text: "Estás a punto de borrar al profesional",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004b81',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'Cancelar'
    });
    if (confirmacion.isConfirmed) {
      try {
        await borrarProfesionalAPI(profesionalId);
        await obtenerProfesionales();
        Swal.fire({
          title: '¡Hecho!',
          text: `El profesional ha sido borrado correctamente`,
          icon: 'success'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: `Hubo un error al borrar al profesional`,
          icon: 'error'
        });
      }
    }
  }
  const navigate = useNavigate();

  const handleEditarProfesional = (id) => {
    navigate("/administrador/editar/"+id);
  }

  return (
    <Container className="mainContainer">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2 className="display-4 admin-title">Profesionales Registrados</h2>
        <Link className="btn btn-primary btn-dar-alta" to="/profesional/crear">
          <i className="bi bi-person-plus"></i> Dar de alta un profesional
        </Link>
      </div>
      <Container className="filterContainer mb-4 mt-2">
         {/* Filtrar por nombre, dni o email search */}
          <Form.Control
            type="text"
            placeholder="Buscar por nombre, dni o email"
            value={busqueda}
            onChange={handleBusquedaChange}
            className="mb-3 search-bar"
          />
           {/* Filtrar por estado dropdown */}
          <DropdownButton
            id="state-dropdown"
            title={`Filtrar por estado: ${filtroEstado}`}
            className="mb-3"
          >
            <Dropdown.Item onClick={() => handleFiltroEstadoChange("todos")}>
              Todos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFiltroEstadoChange("activos")}>
              Activos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFiltroEstadoChange("pendientes")}>
              Pendientes de alta
            </Dropdown.Item>
          </DropdownButton>
          {/* Filtrar por categoria dropdown */}
          <DropdownButton
          id="state-dropdown"
          title={`Filtrar por categoría: ${filtroCategoria === "" ? "Todos" : filtroCategoria}`}
          className="mb-3"
        >
          <Dropdown.Item onClick={() => handleFiltroCategoriaChange("")}>
            Todos
          </Dropdown.Item>
          {categorias.map((categoria) => (
            <Dropdown.Item key={categoria} onClick={() => handleFiltroCategoriaChange(categoria)}>
              {categoria}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Container>
      {loading ? (
        <TableSkeletonLoader />
      ) : (
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
              <th><i className="bi bi-gear"></i></th>
            </tr>
          </thead>
          <tbody>
            {profesionalesFiltrados.map((profesional) => (
              <tr key={profesional._id} className="text-center">
                <td>#<ProfesionalId id={profesional._id} /></td>
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
                  <Dropdown.Item onClick={() => handleDarAltaProfesional(profesional._id, profesional.pendiente)}>
                       {profesional.pendiente ? 'Dar alta' : 'Inactivar'}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={()=> handleBorrarProfesional(profesional._id)}>Borrar <i className="bi bi-trash"></i></Dropdown.Item>
                  <Dropdown.Item onClick={()=> handleEditarProfesional(profesional._id)}>Editar <i className="bi bi-pencil"></i></Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {profesionalesFiltrados.length === 0 && (
          <div className="text-center mt-3">
            <p>No se encontraron profesionales con los parámetros de búsqueda insertados o no se encuentran disponibles.</p>
          </div>
        )}
      </div>
       )}
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

import { Button, Container, Form, Modal } from "react-bootstrap";
import portadaAlbanil from "../../assets/categoryLogos/albanilLogo.webp";
import portadaCarpintero from "../../assets/categoryLogos/carpinteriaLogo.jpg";
import portadaCerrajero from "../../assets/categoryLogos/cerrajeroLogo.jpg";
import portadaElectricista from "../../assets/categoryLogos/electricistaLogo.jpg";
import portadaGasista from "../../assets/categoryLogos/gasistaLogo.png";
import portadaHerrero from "../../assets/categoryLogos/herreroLogo.webp";
import portadaJardinero from "../../assets/categoryLogos/jardineroLogo.jpg";
import portadaMecanico from "../../assets/categoryLogos/mecanicoLogo.webp";
import portadaOtros from "../../assets/categoryLogos/otrosLogo.jpg";
import portadaPintor from "../../assets/categoryLogos/pintorLogo.jpeg";
import portadaPlomero from "../../assets/categoryLogos/plomeriaLogo.jpg";
import { useForm } from "react-hook-form";
import "../../styles/ProfessionalDetail.css";
import "../../styles/professionalProfile.css";
import "../../styles/loaderProfile.css";
import { useEffect, useState } from "react";
import {
  obtenerProfesionalAPI,
  professionalEditProfile,
  uploadProfilePhoto,
} from "../../helpers/queries";
import ProgressBar from "react-bootstrap/ProgressBar";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const ProfessionalProfile = ({ usuarioId }) => {
  const [profesional, setProfesional] = useState({});
  const [cantidadCalificaciones, setcantidadCalificaciones] = useState(0);
  const [cantidad5e, setCantidad5e] = useState(0);
  const [cantidad4e, setCantidad4e] = useState(0);
  const [cantidad3e, setCantidad3e] = useState(0);
  const [cantidad2e, setCantidad2e] = useState(0);
  const [cantidad1e, setCantidad1e] = useState(0);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [modoEdicionCV, setModoEdicionCV] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [cv, setCv] = useState(null);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [mostrarLoader, setMostrarLoader] = useState(true);

  useEffect(() => {
    if (usuarioId) {
      obtenerProfesional(usuarioId);
    }
  }, [usuarioId]);

  useTitle("Tu perfil");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditar = () => {
    setModoEdicion(true);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (profesional.comentarios) {
      setcantidadCalificaciones(profesional.comentarios.length);
      let cantidad5e = 0;
      let cantidad4e = 0;
      let cantidad3e = 0;
      let cantidad2e = 0;
      let cantidad1e = 0;

      profesional.comentarios.forEach((comentario) => {
        switch (comentario.calificacion) {
          case 5:
            cantidad5e++;
            break;
          case 4:
            cantidad4e++;
            break;
          case 3:
            cantidad3e++;
            break;
          case 2:
            cantidad2e++;
            break;
          case 1:
            cantidad1e++;
            break;
          default:
            break;
        }
      });
      setCantidad5e(cantidad5e);
      setCantidad4e(cantidad4e);
      setCantidad3e(cantidad3e);
      setCantidad2e(cantidad2e);
      setCantidad1e(cantidad1e);
    }
  }, [profesional.comentarios]);

  const obtenerProfesional = async () => {
    try {
      setMostrarLoader(true);
      const respuesta = await obtenerProfesionalAPI(usuarioId);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        setProfesional(dato);
        setMostrarLoader(false);
      } else {
        throw new Error("Ocurrió un error al obtener al profesional.");
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  const estrellasLlenas = Math.floor(profesional.calificacion);
  const estrellaMedia = profesional.calificacion - estrellasLlenas;
  const estrellasVacias = 5 - estrellasLlenas - (estrellaMedia >= 0.4 ? 1 : 0);

  const renderEstrellas = () => {
    const estrellas = [];
    for (let i = 0; i < estrellasLlenas; i++) {
      estrellas.push(
        <i key={i} className="bi bi-star-fill me-1 estrella-amarilla"></i>
      );
    }

    if (estrellaMedia >= 0.4) {
      estrellas.push(
        <i
          key={estrellas.length}
          className="bi bi-star-half me-1 estrella-amarilla"
        ></i>
      );
    }

    for (let i = 0; i < estrellasVacias; i++) {
      estrellas.push(
        <i
          key={estrellas.length + i}
          className="bi bi-star-fill me-1 estrella-gris"
        ></i>
      );
    }

    return estrellas;
  };

  let categoria;
  const fotosPortada = [
    { nombre: "Albañil", direccion: portadaAlbanil },
    { nombre: "Carpintero", direccion: portadaCarpintero },
    { nombre: "Cerrajero", direccion: portadaCerrajero },
    { nombre: "Electricista", direccion: portadaElectricista },
    { nombre: "Gasista", direccion: portadaGasista },
    { nombre: "Herrero", direccion: portadaHerrero },
    { nombre: "Jardinero", direccion: portadaJardinero },
    { nombre: "Mecanico", direccion: portadaMecanico },
    { nombre: "Otros", direccion: portadaOtros },
    { nombre: "Pintor", direccion: portadaPintor },
    { nombre: "Plomero", direccion: portadaPlomero },
  ];
  fotosPortada.map((item) => {
    if (profesional.categoria === item.nombre) categoria = item.direccion;
  });

  const handleGuardarCambios = async (formData) => {
    try {
      const respuesta = await professionalEditProfile(formData, usuarioId);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Cambios guardados",
          text: "Los cambios han sido guardados exitosamente.",
          icon: "success",
          confirmButtonColor: "#004b81",
          confirmButtonText: "Aceptar",
        });
        const dato = await respuesta.json();
        setProfesional(dato.professional);
      } else {
        Swal.fire({
          title: "Error",
          text: "Ocurrió un error al intentar guardar los cambios.",
          icon: "error",
          confirmButtonColor: "#004b81",
          confirmButtonText: "Aceptar",
        });
      }
      setModoEdicion(false);
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al intentar guardar los cambios.",
        icon: "error",
      });
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmitPhoto = async (e) => {
    e.preventDefault();
    setPhotoLoading(true);
    try {
      if (photo) {
        const formData = new FormData();
        formData.append("foto", photo);

        const response = await uploadProfilePhoto(formData, usuarioId);

        if (response.status === 200) {
          Swal.fire({
            title: "Cambios guardados!",
            text: `Tu foto de perfil ha sido modificada correctamente!`,
            icon: "success",
            confirmButtonColor: "#004b81",
            confirmButtonText: "Aceptar",
          });
          setShowModal(false);
          setPhotoLoading(false);
        }
      } else {
        console.log("No se ha seleccionado ninguna foto");
      }
    } catch (error) {
      console.error("Error al subir la foto de perfil:", error);
    }
  };

  const handleEditarCV = async () => {
    setModoEdicionCV(true);
  };

  const handleCVChange = (e) => {
    const file = e.target.files[0];
    setCv(file);
  };

  const mostrarComponente = mostrarLoader ? (
    <span className="loader d-flex justify-content-center">
      <p className="text-dark fs-2">Cargando...</p>
    </span>
  ) : (
    <Container>
      <section className="m-4 p-2 fondoFotos contenedorPadre">
        <img
          src={categoria}
          alt="Foto de portada con la categoria del profesional."
          height={200}
          className="cajaPortada"
        />
        <div className="d-flex justify-content-center cajaPerfil margin-photo">
          <div className="estiloFotoPerfil">
            <img
              src={profesional.foto}
              alt="Foto de perfil del profesional."
              className="estiloFotoPerfil img-thumbnail"
            />
          </div>
        </div>
        <Container className="text-center mt-5">
          {modoEdicion ? (
            <>
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="text"
                  className="w-50 my-3"
                  defaultValue={profesional.nombreCompleto}
                  {...register("nombreCompleto")}
                />
              </div>
            </>
          ) : (
            <h1>{profesional.nombreCompleto}</h1>
          )}
          <span className="categoria px-1 text-light">
            <Link
              className="text-decoration-none text-light"
              to={`/categorias/${profesional.categoria}`}
            >
              {profesional.categoria}
            </Link>
          </span>
          <div className="mt-2 text-warning h4">{renderEstrellas()}</div>
          {modoEdicion ? (
            <>
              <div className="d-flex justify-content-center">
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={profesional.descripcion}
                  className="my-3 w-50"
                  {...register("descripcion")}
                />
              </div>
            </>
          ) : (
            <p className="h4 my-3 container texto d-flex justify-content-center">
              {profesional.descripcion}
            </p>
          )}
        </Container>
        <div className="text-center">
          {modoEdicion && (
            <Button
              onClick={handleSubmit(handleGuardarCambios)}
              className="btn-prof"
            >
              Guardar Cambios <i className="bi bi-floppy2"></i>
            </Button>
          )}
          {!modoEdicion && (
            <Button onClick={handleEditar} className="btn-prof">
              Editar Perfil
            </Button>
          )}
          <Button
            onClick={handleShowModal}
            className="btn-prof btn-change-photo"
          >
            Cambiar Foto
          </Button>
        </div>
      </section>
      <section className="m-4 pt-3 p-4 fondoTextos text-center">
        <h3 className="mb-4 titulo">CURRICULUM VITAE</h3>
        {modoEdicionCV ? (
          <>
            <div className="d-flex justify-content-center">
              <Form.Control
                type="file"
                accept="image/*"
                name="cv"
                id="cv-input"
                onChange={handleCVChange}
                className="my-4 w-50"
              />
            </div>
          </>
        ) : (
          <img
            src={profesional.cv}
            alt={profesional.cv}
            className="img-fluid"
          />
        )}
        <div className="container mt-3">
          {modoEdicionCV && (
            <Button
              onClick={() => {
                Swal.fire({
                  title: "Solicitud Enviada",
                  text: "Se ha enviado una petición de cambio de Curriculum para administración, por favor, esté atento a su correo por cualquier notificación",
                  icon: "success",
                  confirmButtonColor: "#004b81",
                  confirmButtonText: "Aceptar",
                });
                setModoEdicionCV(false);
              }}
              className="btn-prof"
            >
              Guardar Cambios <i className="bi bi-floppy2"></i>
            </Button>
          )}
          {!modoEdicionCV && (
            <Button onClick={handleEditarCV} className="btn-prof">
              Editar Curriculum Vitae
            </Button>
          )}
        </div>
        <div className="container mt-3"></div>
      </section>
      <section className="m-4 p-2 pt-3 fondoTextos text-center px-5">
        <h3 className="titulo">OPINIONES</h3>
        <article className="p-3 px-5 bg-light mb-3 mt-3">
          <h3 className="text-warning h1 d-flex justify-content-center ">
            <span className="display-5">
              {profesional.calificacion !== undefined
                ? profesional.calificacion.toFixed(1)
                : ""}
            </span>
            <span className="ms-3 mt-1">{renderEstrellas()}</span>
          </h3>
          <article className="mx-auto mt-3">
            <div className="barCount">
              <div className="bar">
                <ProgressBar
                  variant="warning"
                  now={(cantidad5e / cantidadCalificaciones) * 100}
                  label={`${(
                    (cantidad5e / cantidadCalificaciones) *
                    100
                  ).toFixed(1)}%`}
                />
              </div>
              <h3 className="ms-4 text-secondary"> ({cantidad5e})</h3>
              <div className="count">
                <h3 className="text-warning ">
                  5{" "}
                  <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                </h3>
              </div>
            </div>
            <div className="barCount">
              <div className="bar">
                <ProgressBar
                  variant="warning"
                  now={(cantidad4e / cantidadCalificaciones) * 100}
                  label={`${(
                    (cantidad4e / cantidadCalificaciones) *
                    100
                  ).toFixed(1)}%`}
                />
              </div>
              <h3 className="ms-4 text-secondary"> ({cantidad4e})</h3>
              <div className="count">
                <h3 className="text-warning ">
                  4{" "}
                  <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                </h3>
              </div>
            </div>
            <div className="barCount">
              <div className="bar">
                <ProgressBar
                  variant="warning"
                  now={(cantidad3e / cantidadCalificaciones) * 100}
                  label={`${(
                    (cantidad3e / cantidadCalificaciones) *
                    100
                  ).toFixed(1)}%`}
                />
              </div>
              <h3 className="ms-4 text-secondary"> ({cantidad3e})</h3>
              <div className="count">
                <h3 className="text-warning ">
                  3{" "}
                  <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                </h3>
              </div>
            </div>
            <div className="barCount">
              <div className="bar">
                <ProgressBar
                  variant="warning"
                  now={(cantidad2e / cantidadCalificaciones) * 100}
                  label={`${(
                    (cantidad2e / cantidadCalificaciones) *
                    100
                  ).toFixed(1)}%`}
                />
              </div>
              <h3 className="ms-4 text-secondary"> ({cantidad2e})</h3>
              <div className="count">
                <h3 className="text-warning">
                  2{" "}
                  <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                </h3>
              </div>
            </div>
            <div className="barCount">
              <div className="bar">
                <ProgressBar
                  variant="warning"
                  now={(cantidad1e / cantidadCalificaciones) * 100}
                  label={`${(
                    (cantidad1e / cantidadCalificaciones) *
                    100
                  ).toFixed(1)}%`}
                />
              </div>
              <h3 className="ms-4 text-secondary"> ({cantidad1e})</h3>
              <div className="count">
                <h3 className="text-warning">
                  1{" "}
                  <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                </h3>
              </div>
            </div>
          </article>
        </article>
      </section>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-contain"
      >
        <Modal.Header>
          <Modal.Title>Cambiar Foto de Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitPhoto} encType="multipart/form-data">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Seleccionar nueva foto de perfil:</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                required
              />
            </Form.Group>

            <Button onClick={handleCloseModal} className="btn-prof-cancel">
              Cancelar
            </Button>
            {photoLoading ? (
              <>
                <Button
                  className="btn-prof btn-change-photo"
                  type="submit"
                  disabled
                >
                  Guardando... <i className="bi bi-floppy2"></i>
                </Button>
              </>
            ) : (
              <>
                <Button className="btn-prof btn-change-photo" type="submit">
                  Guardar <i className="bi bi-floppy2"></i>
                </Button>
              </>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );

  return mostrarComponente;
};

export default ProfessionalProfile;

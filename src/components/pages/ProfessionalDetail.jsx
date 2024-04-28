import { Button, Card, Container, Form, Modal } from "react-bootstrap";
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

import "../../styles/ProfessionalDetail.css";
import { useEffect, useState } from "react";
import { obtenerProfesionalAPI } from "../../helpers/queries";
import EstrellasCalificaciones from "./profesional/EstrellasCalificaciones";
import { useParams } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProfessionalDetail = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [evento, setEvento] = useState(false);
  const handleResenaClose = () => setEvento(false);
  const handleResenaShow = () => setEvento(true);

  const [profesional, setProfesional] = useState({});

  const { id } = useParams();

  useEffect(() => {
    obtenerProfesional();
  }, []);

  const obtenerProfesional = async () => {
    try {
      const respuesta = await obtenerProfesionalAPI(id);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        setProfesional(dato);

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
    const estrellasVacias = 5 - estrellasLlenas - (estrellaMedia >= 0.5 ? 1 : 0);

    const renderEstrellas = () => {
        const estrellas = [];
        for (let i = 0; i < estrellasLlenas; i++) {
            estrellas.push(<i key={i} className="bi bi-star-fill me-1 estrella-amarilla"></i>);
        }

        if (estrellaMedia >= 0.5) {
            estrellas.push(<i key={estrellas.length} className="bi bi-star-half me-1 estrella-amarilla"></i>);
        }

        for (let i = 0; i < estrellasVacias; i++) {
            estrellas.push(<i key={estrellas.length + i} className="bi bi-star-fill me-1 estrella-gris"></i>);
        }

        return estrellas;
    };

  // Email del profesional
  const emailProfesional = `mailto:${profesional.email}`;
  const cadena = `${profesional.telefono}`;
  const telefonoSinMas = cadena.replace("+", "");

  // WhatsApp del profesional
  const telefono = `https://api.whatsapp.com/send/?phone=%2B${telefonoSinMas}&text&type=phone_number&app_absent=0`;

  // Mostrar la cantidad de estrellas del Profesional
  const estrellas = [];
  for (let i = 0; i < profesional.calificacion; i++) {
    estrellas.push(1);
  }

  // Logica para seleccionar la foto de portada por la categoria.
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

  return (
    <Container>
      <section className="m-4 p-2 fondoFotos contenedorPadre">
        <img
          src={categoria}
          alt="Foto de portada con la categoria del profesional."
          height={200}
          className="cajaPortada"
        />
        <div className="d-flex justify-content-center cajaPerfil">
          <div className="estiloFotoPerfil">
            <img
              src={profesional.foto}
              alt="Foto de perfil del profesional."
              className="estiloFotoPerfil"
            />
          </div>
        </div>
        <Container className="text-center mt-5">
          <h1 className="mt-5 mb-2 tituloPrincipal">
            {profesional.nombreCompleto}
          </h1>
          <span className="categoria px-1 text-light">
            {profesional.categoria}
          </span>
          <div className="mt-2 text-warning h4">
            {estrellas.map((item,pos) => (
              <i key={pos} className="bi bi-star-fill me-1"></i>
            ))}
          </div>
          <Button
            className="mt-3 pb-1 mb-2 px-5 btn btnContacto"
            onClick={handleShow}
          >
            CONTACTAR
          </Button>
          <p className="h4 my-3 container texto d-flex justify-content-center">
            {profesional.descripcion}
          </p>
        </Container>
      </section>
      <section className="m-4 pt-3 p-4 fondoTextos text-center">
        <h3 className="mb-4 titulo">CURRICULUM VITAE</h3>
        <img
          src="https://cdn-v1.udocz-assets.com/uploads/book/cover/447297/447297.jpg"
          // alt="Curriculum Vitae del profesional."
          alt={profesional.cv}
          className="img-fluid"
        />
      </section>
      <section className="m-4 p-2 pt-3 fondoTextos text-center px-5">
        <h3 className="titulo">OPINIONES</h3>
        <article className="p-3 px-5 bg-light mb-3 mt-3">
          <h3 className="text-warning h1 d-flex justify-content-center ">
            <span className="display-5">
              {profesional.calificacion !== undefined ? profesional.calificacion.toFixed(1) : ""}
            </span>
            <span className="ms-3 mt-1">
              {renderEstrellas()}
            </span>
          </h3>
          <article>
            <div className="mb-3">
                <span>Calificaciones de 5 estrellas: </span>
                <ProgressBar variant="warning" label={"20%"} now={20} />
            </div>
            <div className="mb-3">
                <span>Calificaciones de 4 estrellas: </span>
                <ProgressBar variant="warning" label={"40%"} now={40} />
            </div>
            <div className="mb-3">
                <span>Calificaciones de 5 estrellas: </span>
                <ProgressBar variant="warning" label={"10%"} now={10} />
            </div>
            <div className="mb-3">
                <span>Calificaciones de 5 estrellas: </span>
                <ProgressBar variant="warning" label={"10%"} now={10} />
            </div>
            <div className="mb-3">
                <span>Calificaciones de 5 estrellas: </span>
                <ProgressBar variant="warning" label={"20%"} now={20} />
            </div>
          </article>

        </article>
        <Button
          className="my-3 mb-4 px-5 btn btnContacto"
          onClick={handleResenaShow}
        >
          AGREGAR RESEÑA
        </Button>
        <article className="pCard">
          {profesional.comentarios && profesional.comentarios.length > 0 ? (
              profesional.comentarios.map((comentario, index) => (
                <Card className="cardOpinion mb-3" key={index}>
                  <Card.Header className="text-warning d-flex justify-content-center">
                  {[...Array(comentario.calificacion)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill me-1 estrella estrella-amarilla"></i>
                  ))}
                  {[...Array(5 - comentario.calificacion)].map((_, i) => (
                    <i key={i + comentario.calificacion} className="bi bi-star-fill me-1 estrella estrella-gris"></i>
                  ))}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{comentario.autor}</Card.Title>
                    <Card.Text className="texto">
                      {comentario.descripcion}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <i className="bi bi-hand-thumbs-up-fill color h2 me-2"></i>{" "}
                    <i className="bi bi-hand-thumbs-down-fill h2 color"></i>
                  </Card.Footer>
                </Card>
              ))
          ) : (
              <p>No hay comentarios disponibles</p>
          )}
          
        </article>
      </section>
      {/* Modal - Contacto */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="h2 d-flex justify-content-center pt-3 titulo fondoAzul"
        >
          Contactate con {profesional.nombreCompleto}
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mt-3">
            <span className="border-bottom border-danger pe-2 titulo">
              <b className="">📞 Telefono del Profesional:</b>
            </span>
            <div className="p-1"></div>
            <span className="border border-danger p-2 rounded-pill">
              {profesional.telefono}
            </span>
            <br />
            <a
              href={telefono}
              target="_blank"
              className="btn btn-outline-success my-3 mt-5 titulo"
            >
              <i className="bi bi-whatsapp"></i>
              <b> Ir al WhatsApp del Profesional</b>
            </a>
            <br />
            <a
              href={emailProfesional}
              target="_blank"
              className="btn btn-outline-info my-4 titulo"
            >
              <i className="bi bi-envelope-fill"></i>{" "}
              <b>Ir a E-mail del Profesional</b>
            </a>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modal - Reseña */}
      <Modal show={evento} onHide={handleResenaClose}>
        <Modal.Header
          closeButton
          className="titulo h2 d-flex pt-3 justify-content-center fondoAzul"
        >
          OPINA SOBRE EL PROFESIONAL
        </Modal.Header>
        <Modal.Body className="textoForm">
          <Form>
            <Form.Group className="mb-3" controlId="inputEstrellas">
              <Form.Label>Tu Puntuación</Form.Label>
              <div></div>
              <EstrellasCalificaciones></EstrellasCalificaciones>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputDisponibilidad">
              <Form.Label>
                ¿Haz Realizado Algún Trabajo con el Profesional?
              </Form.Label>
              <div></div>
              <Form.Check
                inline
                label="Si"
                name="colaboracion"
                type="radio"
                id="si"
              />
              <Form.Check
                inline
                label="No"
                name="colaboracion"
                type="radio"
                id="no"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputDescripcionOpinion">
              <Form.Label>Escribe Tu Opinión</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Ej: Es una persona confiable y realiza su trabajo a tiempo."
                required
                minLength={10}
                maxLength={150}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputNombre">
              <Form.Label>Tu Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Facundo Herrera"
                required
                minLength={3}
                maxLength={20}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Tu Dirección de Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="roberto@gmail.com"
                required
                minLength={5}
                maxLength={150}
              />
            </Form.Group>
            <div className="text-center my-2">
              <Button type="submit" className="btnContacto">
                ENVIAR
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProfessionalDetail;

import { Button, Card, Container, Form, Modal } from "react-bootstrap";
// Despues voy a usar esto para la portada.
import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";
import imgValoracion from "../../assets/valoracion-cuadro.png";
import "../../styles/ProfessionalDetail.css";
import { useEffect, useState } from "react";
import { obtenerProfesionalesAPI } from "../../helpers/queries";
import EstrellasCalificaciones from "./profesional/EstrellasCalificaciones";

const ProfessionalDetail = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [evento, setEvento] = useState(false);
  const handleResenaClose = () => setEvento(false);
  const handleResenaShow = () => setEvento(true);

  const [profesional, setProfesional] = useState({});

  useEffect(() => {
    obtenerProfesional();
  }, []);

  const obtenerProfesional = async () => {
    try {
      const respuesta = await obtenerProfesionalesAPI();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos);

        datos.map((itemProfesional) => {
          if (itemProfesional._id === "661f1f38dea0d3444ede46de") {
            setProfesional(itemProfesional);
          }
        });
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

  const emailProfesional = `mailto:${profesional.email}`;  
  const cadena = `${profesional.telefono}`;
  const telefonoSinMas = cadena.replace("+", "");

  const telefono = `https://api.whatsapp.com/send/?phone=%2B${telefonoSinMas}&text&type=phone_number&app_absent=0`;

  return (
    <Container>
      <section className="m-4 p-2 fondoFotos contenedorPadre">
        <img
          src={imagenPortada}
          alt="Foto de portada con la categoria del profesional."
          height={200}
          className="cajaPortada"
        />
        <div className="d-flex justify-content-center cajaPerfil">
          <div className="estiloFotoPerfil">
            <img
              // src="https://allyounews.com/wp-content/uploads/2017/09/smiling-young-woman-looking-at-c-52426522.jpg"
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
            <i className="bi bi-star-fill me-1"></i>
            <i className="bi bi-star-fill me-1"></i>
            <i className="bi bi-star-fill me-1"></i>
            <i className="bi bi-star-fill me-1"></i>
            <i className="bi bi-star-fill me-1"></i>
          </div>
          <Button
            className="mt-3 pb-1 mb-2 px-5 btn btnContacto"
            onClick={handleShow}
          >
            CONTACTAR
          </Button>
          {/* <p className="h4 my-3 container texto">
          Hola! Soy María, una apasionada albañil con una sólida experiencia en la construcción y reparación de estructuras. Estoy decidida a encontrar un trabajo donde pueda aplicar mis habilidades y contribuir al éxito de un proyecto.
          </p> */}
          <p className="h4 my-3 container texto">{profesional.descripcion}</p>
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
          <h3 className="text-warning h1 d-flex justify-content-center">
            5.0
            <i className="bi bi-star-fill ms-2 me-1"></i>
            <i className="bi bi-star-fill me-1"></i>
            <i className="bi bi-star-fill me-1"></i>
            <i className="bi bi-star-fill me-1"></i>
            <i className="bi bi-star-fill"></i>
          </h3>
          <img
            src={imgValoracion}
            alt="valoración de opiniones"
            className="img-fluid"
          />
        </article>
        <Button
          className="my-3 mb-4 px-5 btn btnContacto"
          onClick={handleResenaShow}
        >
          AGREGAR RESEÑA
        </Button>
        <article className="pCard">
          <Card className="cardOpinion mb-3">
            <Card.Header className="text-warning d-flex justify-content-center">
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill"></i>
            </Card.Header>
            <Card.Body>
              <Card.Title>Luis Figal</Card.Title>
              <Card.Text className="texto">
                Trabajo realizado, todo ha quedado muy bien, profesional de
                confianza.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <i className="bi bi-hand-thumbs-up-fill color h2 me-2"></i>{" "}
              <i className="bi bi-hand-thumbs-down-fill h2 color"></i>
            </Card.Footer>
          </Card>
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

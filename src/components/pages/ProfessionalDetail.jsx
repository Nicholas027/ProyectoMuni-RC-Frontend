import { Button, Card, Container, Form, Modal } from "react-bootstrap";
// Despues voy a usar esto para la portada.
// import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";
import imgValoracion from "../../assets/valoracion-cuadro.png";
import "../../styles/ProfessionalDetail.css";
import { useState } from "react";
import EstrellasCalificaciones from "./profesional/EstrellasCalificaciones";

const ProfessionalDetail = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [evento, setEvento] = useState(false);
  const handleResenaClose = () => setEvento(false);
  const handleResenaShow = () => setEvento(true);

  return (
    <Container>
      <section className="m-4 p-2 fondoFotos contenedorPadre">
        <img
          src="https://p1.pxfuel.com/preview/612/717/141/mason-construction-bucket-brick.jpg"
          alt="Foto de portada con la categoria del profesional."
          height={200}
          className="cajaPortada"
        />
        <div className="d-flex justify-content-center cajaPerfil">
          <div className="estiloFotoPerfil">
            <img
              src="https://allyounews.com/wp-content/uploads/2017/09/smiling-young-woman-looking-at-c-52426522.jpg"
              alt="Foto de perfil del profesional."
              className="estiloFotoPerfil"
            />
          </div>
        </div>
        <Container className="text-center mt-5">
          <h1 className="mt-5 mb-2 tituloPrincipal">Marta Maria Vera</h1>
          <span className="categoria px-1 text-light">Albañil</span>
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
          <p className="h4 my-3 container texto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iure
            cumque maxime aliquam et doloribus reiciendis itaque vero sunt
            quisquam, nisi veniam corrupti inventore similique facilis eum quod
            impedit rerum.
          </p>
        </Container>
      </section>
      <section className="m-4 pt-3 p-4 fondoTextos text-center">
        <h3 className="mb-4 titulo">CURRICULUM VITAE</h3>
        <img
          src="https://cdn-v1.udocz-assets.com/uploads/book/cover/447297/447297.jpg"
          alt="Curriculum Vitae del profesional."
          className="img-fluid"
        />
      </section>
      <section className="m-4 p-2 pt-3 fondoTextos text-center px-5">
        <h3 className="titulo">OPINIONES</h3>
        <article className="p-3 px-5 bg-light mb-3 mt-3">
          <h3 className="text-warning h1">
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
        <article className="px-5">
          <Card className="cardOpinion mb-3">
            <Card.Header className="text-warning">
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill"></i>
            </Card.Header>
            <Card.Body>
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
          Contactate con el Profesional
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mt-3">
            <span className="border-bottom border-danger pe-2 titulo">
              <b>📞 Telefono del Profesional:</b>
            </span>
            <span className="border border-danger p-2 rounded-pill">
              3865-202746
            </span>
            <br />
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5493865228080&text&type=phone_number&app_absent=0"
              target="_blank"
              className="btn btn-outline-success my-3 mt-5 titulo"
            >
              <i className="bi bi-whatsapp"></i>
              <b> Ir al WhatsApp del Profesional</b>
            </a>
            <br />
            <a
              href="mailto:prensa@concepcion.gob.ar"
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputNombre">
              <Form.Label>Tu Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ej: Café" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Tu Dirección de Email</Form.Label>
              <Form.Control type="email" placeholder="roberto@gmail.com" />
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

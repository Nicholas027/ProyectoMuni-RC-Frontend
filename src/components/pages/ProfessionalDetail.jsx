import { Button, Card, Container, Modal } from "react-bootstrap";
import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";
import imgValoracion from "../../assets/valoracion-cuadro.png";
import "../../styles/ProfessionalDetail.css";
import { useState } from "react";

const ProfessionalDetail = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              src="https://allyounews.com/wp-content/uploads/2017/09/smiling-young-woman-looking-at-c-52426522.jpg"
              alt="Foto de perfil del profesional."
              className="estiloFotoPerfil"
            />
          </div>
        </div>
        <Container className="text-center mt-5">
            <h1 className="mt-5">Marta Maria Vera</h1>
          <span className="categoria px-1 text-light">Albañil</span>
          <div className="mt-2">⭐⭐⭐⭐⭐</div>
          <Button className="mt-3 py-1 px-5 btnContacto" onClick={handleShow}>
            Contactar
          </Button>
          <p className="h4 my-3 container">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iure
            cumque maxime aliquam et doloribus reiciendis itaque vero sunt
            quisquam, nisi veniam corrupti inventore similique facilis eum quod
            impedit rerum.
          </p>
        </Container>
      </section>
      <section className="m-4 pt-3 p-4 fondoTextos text-center">
        <h3 className="mb-4">Curriculum Vitae</h3>
        <img
          src="https://cdn-v1.udocz-assets.com/uploads/book/cover/447297/447297.jpg"
          alt="Curriculum Vitae del profesional."
          className="img-fluid"
        />
      </section>
      <section className="m-4 p-2 pt-3 fondoTextos text-center">
        <h3>Opiniones</h3>
        <article className="p-3">
          <h3 className="text-warning h1">5.0 ⭐⭐⭐⭐⭐</h3>
          <img
            src={imgValoracion}
            alt="valoración de opiniones"
            className="img-fluid"
          />
        </article>
        <article>
          <Card className="cardOpinion mb-3">
            <Card.Header>⭐⭐⭐⭐⭐</Card.Header>
            <Card.Body>
              <Card.Text>
                Trabajo realizado, todo ha quedado muy bien, profesional de
                confianza.
              </Card.Text>
            </Card.Body>
            <Card.Footer>👍👎</Card.Footer>
          </Card>
        </article>
      </section>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} className="fondoTextos">
        <Modal.Header className="h2 d-flex justify-content-center mt-3">
          Contactate con el Profesional
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mt-3">
            <span className="border-bottom border-danger pe-2">
              <b>📞 Telefono del Profesional:</b>
            </span>
            <span className="border border-danger p-2 rounded-pill">
              3865-202746
            </span>
            <br />
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5493865228080&text&type=phone_number&app_absent=0"
              target="_blank"
              className="btn btn-outline-success my-3 mt-5"
            >
              <i className="bi bi-whatsapp"></i>
              <b> Ir al WhatsApp del Profesional</b>
            </a>
            <br />
            <a
              href="mailto:prensa@concepcion.gob.ar"
              target="_blank"
              className="btn btn-outline-info my-4"
            >
              <i className="bi bi-envelope-fill"></i>{" "}
              <b>Ir a E-mail del Profesional</b>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProfessionalDetail;

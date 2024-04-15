import { Button, Card, Container, Modal } from "react-bootstrap";
// Despues voy a usar esto para la portada.
// import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";
// import imgValoracion from "../../assets/valoracion-cuadro.png";
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
    </Container>
  );
};

export default ProfessionalDetail;

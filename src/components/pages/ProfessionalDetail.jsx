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
          src="https://losalbaniles.com/wp-content/uploads/2019/10/Imagen_2.jpg"
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
        
      </section>
    </Container>
  );
};

export default ProfessionalDetail;

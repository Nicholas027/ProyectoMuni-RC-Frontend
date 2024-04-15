import { Container } from "react-bootstrap";
import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";

const ProfessionalDetail = () => {
  return (
    <>
      <img
        src={imagenPortada}
        alt="Foto de portada con la categoria del profesional."
        height={200}
        className="w-100"
      />
      <div className="d-flex justify-content-center">
        <div className="estiloFotoPerfil">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"
            alt="Foto de perfil del profesional."
            className="w-100 estiloFotoPerfil"
          />
        </div>
      </div>
      <Container></Container>
    </>
  );
};

export default ProfessionalDetail;

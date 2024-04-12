import logo from "../../assets/logo_muni_vectorized.png";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="text-light text-center py-5">
      <img
        src={logo}
        alt="Logo de la municipalidad de Concepción"
        className="img-fluid"
        width={500}
      />
      <p className="text-center">Estamos trabajando para vos.</p>
      <Container className="my-5 iconsFooter">
        <a href="https://twitter.com/Concepcion_Tuc" target="_blank">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          href="https://www.facebook.com/municipalidadeconcepcion"
          target="_blank"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/municipalidadconcepcion"
          target="_blank"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@municipalidadconcepcion9109"
          target="_blank"
        >
          <i className="bi bi-youtube"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5493865228080&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="mailto:prensa@concepcion.gob.ar" target="_blank">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </Container>

      <p className="text-center mt-5 copyright">
        &copy; Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

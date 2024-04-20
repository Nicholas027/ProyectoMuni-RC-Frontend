import { Link } from "react-router-dom";
import "../../styles/error404.css";
import { Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container className="text-center my-5">
      <h1 className="display-1 tituloError my-4">Error 404</h1>
      <p className="display-5 mensajeError my-4">Página no encontrada!</p>
      <Link className="btn btn-dark mt-5" to="/">
        Volver al inicio
      </Link>
      <div className="text-center mt-5 mb-2 iconsError">
        <a
          href="https://twitter.com/Concepcion_Tuc"
          target="_blank"
          className="my-4 mx-3"
        >
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          href="https://www.facebook.com/municipalidadeconcepcion"
          target="_blank"
          className="my-4 mx-3"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/municipalidadconcepcion"
          target="_blank"
          className="my-4 mx-3"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@municipalidadconcepcion9109"
          target="_blank"
          className="my-4 mx-3"
        >
          <i className="bi bi-youtube"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B5493865228080&text&type=phone_number&app_absent=0"
          target="_blank"
          className="my-4 mx-3"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a
          href="mailto:prensa@concepcion.gob.ar"
          target="_blank"
          className="my-4 mx-3"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>
    </Container>
  );
};

export default Error404;

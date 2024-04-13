import "../../styles/error404.css";

const Error404 = () => {
  return (
    <section>
      <div className="wrapper text-center text-white">
        <h1 className="display-1 tituloError">Error 404</h1>
        <p className="display-5 mensajeError">Página no encontrada!</p>
        <a className="btn btn-dark" href="#inicio">
          Volver al inicio
        </a>
        <div className="text-center my-3 iconsError">
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
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Error404;

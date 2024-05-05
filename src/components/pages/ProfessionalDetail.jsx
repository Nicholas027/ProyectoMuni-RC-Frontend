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
import { useForm } from "react-hook-form";
import "../../styles/ProfessionalDetail.css";
import { useEffect, useState } from "react";
import { obtenerProfesionalAPI } from "../../helpers/queries";
import { professionalAddComment } from "../../helpers/queries";
import { useParams} from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Swal from "sweetalert2";
import EstrellasCalificaciones from "./profesional/EstrellasCalificaciones";


const ProfessionalDetail = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [evento, setEvento] = useState(false);
  const handleResenaClose = () => setEvento(false);
  const handleResenaShow = () => setEvento(true);

  const [profesional, setProfesional] = useState({});
  const [cantidadCalificaciones, setcantidadCalificaciones] = useState(0);
  const [cantidad5e, setCantidad5e] = useState(0);
  const [cantidad4e, setCantidad4e] = useState(0);
  const [cantidad3e, setCantidad3e] = useState(0);
  const [cantidad2e, setCantidad2e] = useState(0);
  const [cantidad1e, setCantidad1e] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try{

      const response = await professionalAddComment(id ,formData)

      if (response.mensaje === "Comentario agregado exitosamente") {

        handleResenaClose();
        Swal.fire({
          title: `Comentario Agregado`,
          text: "El comentario se agregó exitosamente",
          icon: "success",
          confirmButtonColor: "#004b81",
          confirmButtonText: `Aceptar`,
        }).then((result) => {
          // Verifica si el usuario hizo clic en el botón de aceptar
          if (result.isConfirmed) {
            // Redirige para recargar la página
            window.location.reload();
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El comentario no fue agregado, intentelo nuevamente más tarde",
        });
      }
      
    }catch (error) {
      console.error("Error al agregar comentario", error);
      Swal.fire({
        title: "Ocurrió un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
        confirmButtonColor: "#004b81",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const { id } = useParams();

  useEffect(() => {
    obtenerProfesional();
  }, []);

  useEffect(() => {
    // Verificar si profesional.comentarios está definido antes de usarlo
    if (profesional.comentarios) {
      // Establecer la cantidad total de calificaciones
      setcantidadCalificaciones(profesional.comentarios.length);

      // Inicializar variables para las cantidades de estrellas
      let cantidad5e = 0;
      let cantidad4e = 0;
      let cantidad3e = 0;
      let cantidad2e = 0;
      let cantidad1e = 0;

      // Iterar sobre los comentarios para contar las calificaciones
      profesional.comentarios.forEach((comentario) => {
        switch (comentario.calificacion) {
          case 5:
            cantidad5e++;
            break;
          case 4:
            cantidad4e++;
            break;
          case 3:
            cantidad3e++;
            break;
          case 2:
            cantidad2e++;
            break;
          case 1:
            cantidad1e++;
            break;
          default:
            break;
        }
      });

      // Actualizar el estado con las cantidades de estrellas
      setCantidad5e(cantidad5e);
      setCantidad4e(cantidad4e);
      setCantidad3e(cantidad3e);
      setCantidad2e(cantidad2e);
      setCantidad1e(cantidad1e);
    }
  }, [profesional.comentarios]);

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

  // Email del profesional
  const emailProfesional = `mailto:${profesional.email}`;
  const cadena = `${profesional.telefono}`;
  const telefonoSinMas = cadena.replace("+", "");

  // WhatsApp del profesional
  const telefono = `https://api.whatsapp.com/send/?phone=%2B${telefonoSinMas}&text&type=phone_number&app_absent=0`;

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

          {cantidadCalificaciones ? (
            <EstrellasCalificaciones calificacion={profesional.calificacion}/>
          ) : (
            <div></div>
          )}

          
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
          src={profesional.cv}
          alt="Curriculum Vitae del profesional."
          className="img-fluid"
        />
      </section>
      <section className="m-4 p-2 pt-3 fondoTextos text-center px-5">
        <h3 className="titulo">OPINIONES</h3>

        {cantidadCalificaciones ? (
          <article className="py-3 bg-light mb-3 mt-3">
            <h3 className="text-warning h1 d-flex justify-content-center ">
              <span className="display-5">
                {profesional.calificacion !== undefined
                  ? profesional.calificacion.toFixed(1)
                  : ""}
              </span>
              <div className="estrellasPromedio">
                <EstrellasCalificaciones  calificacion={profesional.calificacion}/>
              </div>  
            </h3>
            <article className="mx-auto mt-3">
              <div className="barCount">
                <div className="bar">
                  <ProgressBar
                    variant="warning"
                    now={(cantidad5e / cantidadCalificaciones) * 100}
                    label={`${(
                      (cantidad5e / cantidadCalificaciones) *
                      100
                    ).toFixed(1)}%`}
                  />
                </div>
                <div className="count">
                  <h3 className="text-secondary"> ({cantidad5e})</h3>
                  <h3 className="text-warning ">
                    5
                    <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                  </h3>
                </div>
              </div>
              <div className="barCount">
                <div className="bar">
                  <ProgressBar
                    variant="warning"
                    now={(cantidad4e / cantidadCalificaciones) * 100}
                    label={`${(
                      (cantidad4e / cantidadCalificaciones) *
                      100
                    ).toFixed(1)}%`}
                  />
                </div>
                <div className="count">
                  <h3 className="text-secondary"> ({cantidad4e})</h3>
                  <h3 className="text-warning ">
                    4
                    <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                  </h3>
                </div>
              </div>
              <div className="barCount">
                <div className="bar">
                  <ProgressBar
                    variant="warning"
                    now={(cantidad3e / cantidadCalificaciones) * 100}
                    label={`${(
                      (cantidad3e / cantidadCalificaciones) *
                      100
                    ).toFixed(1)}%`}
                  />
                </div>
                <div className="count">
                  <h3 className="text-secondary"> ({cantidad3e})</h3>
                  <h3 className="text-warning ">
                    3
                    <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                  </h3>
                </div>
              </div>
              <div className="barCount">
                <div className="bar">
                  <ProgressBar
                    variant="warning"
                    now={(cantidad2e / cantidadCalificaciones) * 100}
                    label={`${(
                      (cantidad2e / cantidadCalificaciones) *
                      100
                    ).toFixed(1)}%`}
                  />
                </div>
                <div className="count">
                  <h3 className="text-secondary"> ({cantidad2e})</h3>
                  <h3 className="text-warning">
                    2
                    <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                  </h3>
                </div>
              </div>
              <div className="barCount">
                <div className="bar">
                  <ProgressBar
                    variant="warning"
                    now={(cantidad1e / cantidadCalificaciones) * 100}
                    label={`${(
                      (cantidad1e / cantidadCalificaciones) *
                      100
                    ).toFixed(1)}%`}
                  />
                </div>
                <div className="count">
                  <h3 className="text-secondary"> ({cantidad1e})</h3>
                  <h3 className="text-warning">
                    1
                    <i className=" ms-1 bi bi-star-fill me-1 estrella-amarilla"></i>
                  </h3>
                </div>
              </div>
            </article>
          </article>
        ) : (
          <article className="py-3 bg-light mb-3 mt-3">
          <h3 className="display-6 mb-4">
            Este Profesional aún no tiene reseñas 
          </h3>
          <h4>¡Contrata a {profesional.nombreCompleto} y dinos tu opinión!</h4>
        </article>
        )}


        <Button
          className="my-3 mb-4 px-5 btn btnContacto"
          onClick={handleResenaShow}
        >
          AGREGAR RESEÑA
        </Button>
        <article className="pCard">
          <h3>{cantidadCalificaciones} comentarios en total</h3>
          {profesional.comentarios && profesional.comentarios.length > 0 ? (
            profesional.comentarios.map((comentario, index) => (
              <Card className="cardOpinion mb-3" key={index}>
                <Card.Header className="text-warning d-flex justify-content-center">
                  {[...Array(comentario.calificacion)].map((_, i) => (
                    <i
                      key={i}
                      className="bi bi-star-fill me-1 estrella estrella-amarilla"
                    ></i>
                  ))}
                  {[...Array(5 - comentario.calificacion)].map((_, i) => (
                    <i
                      key={i + comentario.calificacion}
                      className="bi bi-star-fill me-1 estrella estrella-gris"
                    ></i>
                  ))}
                </Card.Header>
                <Card.Body>
                  <Card.Title className="tituloComentario">
                    {comentario.tituloComentario}
                  </Card.Title>
                  <Card.Text className="texto">
                    {comentario.descripcion}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Title>
                    {" "}
                    <i className="bi bi-person-circle mt-2 me-1"></i>{" "}
                    {comentario.autor}
                  </Card.Title>
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="inputEstrellas">
              <Form.Label>Tu Puntuación</Form.Label>
              <div></div>
              <Form.Check
                inline
                label="1 ⭐"
                name="calificacion"
                type="radio"
                value="1"
                id="1"
                {...register("calificacion", { required: "Ingrese una calificación" })}
              />
              <Form.Check
                inline
                label="2 ⭐"
                name="calificacion"
                type="radio"
                value="2"
                id="2"
                {...register("calificacion", { required: "Ingrese una calificación" })}
              />
              <Form.Check
                inline
                label="3 ⭐"
                name="calificacion"
                type="radio"
                value="3"
                id="3"
                {...register("calificacion", { required: "Ingrese una calificación" })}
              />
              <Form.Check
                inline
                label="4 ⭐"
                name="calificacion"
                type="radio"
                value="4"
                id="4"
                {...register("calificacion", { required: "Ingrese una calificación" })}
              />
              <Form.Check
                inline
                label="5 ⭐"
                name="calificacion"
                type="radio"
                value="5"
                id="5"
                {...register("calificacion", { required: "Ingrese una calificación" })}
              />
              <Form.Text className="text-danger">
                {errors.calificacion?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputDisponibilidad">
              <Form.Label>Dinos tu opinión general</Form.Label>
              <div></div>
              <Form.Control
                type="text"
                placeholder="Ej: Profesional Recomendable"
                {...register("tituloComentario", {
                  required: "Ingrese un titulo para su comentario",
                  minLength: {
                    value: 5,
                    message: "Ingrese una opinión con mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 25,
                    message: "Ingrese una opinión con máximo 30 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.tituloComentario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputDescripcionOpinion">
              <Form.Label>Escribe Tu Opinión</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Ej: Es una persona confiable y realiza su trabajo a tiempo."
                {...register("descripcion", {
                  required: "Ingrese una descripcion",
                  minLength: {
                    value: 10,
                    message: "Ingrese una descripcion con mínimo 10 caracteres",
                  },
                  maxLength: {
                    value: 150,
                    message:
                      "Ingrese una descripcion con máximo 200 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.descripcion?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputNombre">
              <Form.Label>Tu Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                {...register("autor", {
                  required: "Ingrese su nombre",
                  minLength: {
                    value: 3,
                    message: "Ingrese un nombre con mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Ingrese un nombre con máximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.autor?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Tu Dirección de Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                {...register("emailAutor", {
                  required: "Ingrese su email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingrese un email valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.emailAutor?.message}
              </Form.Text>
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

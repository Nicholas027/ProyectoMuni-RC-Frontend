import "../../../styles/administrador-alta.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../../assets/logo_muni_vertical_AZUL.png";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import useTitle from "../../../hooks/useTitle";
import Swal from 'sweetalert2';
import { professionalAdminRegisterAPI } from "../../../helpers/queries.js";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useTitle("Añadir nuevo profesional")
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      formData.pendiente = false;
      const response = await professionalAdminRegisterAPI(formData);
      if (response.profesional) {
        Swal.fire({
          title: '¡Hecho!',
          text: `${response.mensaje}`,
          icon: 'success'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/administrador");
          }
        });
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `Intenta esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error al registrar el profesional:", error);
      Swal.fire({
        title: "Ocurrió un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };;

  return (
    <>
      <div className="position-relative all-contain">
        <div className="backgroundSignUp">
          <img
            src="https://vientostucumanos.com.ar/download/multimedia.normal.9757421f7482217b.4675656e74655f6e6f726d616c2e6a7067.jpg"
            alt="imgProducto"
          />
        </div>

        <Container className="boxContent rounded-4">
          <div className="title">
            <img
              src={logoMuni}
              alt="imgProducto"
              className="rounded-start-4 "
              width={140}
              height={155}
            />
            <h1>REGISTRAR NUEVO PROFESIONAL</h1>
          </div>

          <div className="formContent">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre y apellido"
                  {...register("nombreCompleto", {
                    required: "Ingrese el nombre completo",
                    minLength: {
                      value: 8,
                      message: "Ingrese el nombre con mínimo 2 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message: "Ingrese el nombre con máximo 50 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreCompleto?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDni">
                <Form.Label>DNI (sin puntos)</Form.Label>
                <Form.Control
                  type="number" 
                  placeholder="10000000"
                  {...register("dni", {
                    required: "Ingrese el DNI",
                    min: {
                        value: 10000000,
                        message: "Ingrese un dni valido",
                      },
                      max: {
                        value: 99999999,
                        message: "Ingrese un dni valido",
                      },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.dni?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Foto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese una dirección de foto"
                  {...register("foto", {
                    required: "Ingrese la foto de perfil del profesional",
                    pattern: {
                      value:
                        /(http)=?s?:?(\/\/[^"'"]*\.(?:png|jpg|jpeg|gif|svg))/i,
                      message:
                        "Ingrese una url de una imagen png, jpg, gif, svg",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.foto?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese el email"
                  {...register("email", {
                    required: "Ingrese el email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email o Contraseña incorrecta",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese la contraseña"
                  {...register("password", {
                    required: "Ingrese la contraseña",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{6,20}$/,
                      message: "La contraseña debe minimo 6 caracteres, Una mayuscula y un numero",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>CV</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su CV"
                  {...register("cv", {
                    required: "Ingrese su cv",
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.cv?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCategoria">
                <Form.Label>Categoría (Profesión ejercida por él):</Form.Label>
                <Form.Select
                  {...register("categoria", {
                    required: "Seleccione una Categoría",
                  })}
                >
                  <option value="">Seleccione una Opción</option>
                  <option value="Carpintero">Carpintero</option>
                  <option value="Gasista">Gasista</option>
                  <option value="Cerrajero">Cerrajero</option>
                  <option value="Mecanico">Mecánico</option>
                  <option value="Electricista">Electricista</option>
                  <option value="Albañil">Albañil</option>
                  <option value="Plomero">Plomero</option>
                  <option value="Pintor">Pintor</option>
                  <option value="Herrero">Herrero</option>
                  <option value="Jardinero">Jardinero</option>
                  <option value="Otros">Otros</option>
                </Form.Select>
                <Form.Text className="text-danger">
                  {errors.categoria?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número de Teléfono de contacto (sin 15 ni 0 ni -)</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="3865505050"
                  {...register("telefono", {
                    required: "Ingrese su telefono",
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.tel?.message}
                </Form.Text>
              </Form.Group>

              <div className="btnConteiner">
                <Button className="btnPrincipal" type="submit">Registrar nuevo profesional</Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;

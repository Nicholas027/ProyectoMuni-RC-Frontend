import "../../styles/signUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../assets/logo_muni_vertical_AZUL.png";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { professionalRegisterAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const SignUpProfessional = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  useTitle("Registro Profesional")

  const onSubmit = async (usuario) => {
      try {
        usuario.calificacion = 1;
        let telefono = "+549" + usuario.telefono;
        usuario.telefono = telefono;
        const response = await professionalRegisterAPI(usuario);
        reset();
        if (response.profesional) {
          Swal.fire({
            title: "¡Hecho!",
            text: `${response.mensaje}`,
            icon: "success",
            confirmButtonColor: '#004b81',
            confirmButtonText: 'Aceptar',
          });
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `Intenta esta operación en unos minutos.`,
            icon: "error",
            confirmButtonColor: '#004b81',
            confirmButtonText: 'Aceptar',
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
  };

  const password = watch("password");

  return (
    <>
      <div className="position-relative">
        <div className="backgroundSignUp">
          <img
            src="https://cofatuc.org.ar/wordpress/wp-content/uploads/2017/11/concepcion2.jpg"
            alt="Backgound"
          />
        </div>

        <Container className="boxContent rounded-4">
          <div className="title">
            <img
              src={logoMuni}
              alt="Logo Municipalidad"
              className="rounded-start-4 "
              width={140}
              height={155}
            />
            <h1>REGISTRARSE</h1>
          </div>

          <div className="formContent">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre y apellido"
                  {...register("nombreCompleto", {
                    required: "Ingrese su nombre completo",
                    minLength: {
                      value: 8,
                      message: "Ingrese un nombre con mínimo 2 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message: "Ingrese un nombre con máximo 50 caracteres",
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
                    required: "Ingrese su DNI",
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su email"
                  {...register("email", {
                    required: "Ingrese su email",
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
                  placeholder="Ingrese su contraseña"
                  {...register("password", {
                    required: "Ingrese su contraseña",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{6,20}$/,
                      message:
                        "La contraseña debe minimo 6 caracteres, Una mayuscula y un numero",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme su contraseña"
                  {...register("confirmPassword", {
                    required: "Confirme su contraseña",
                    validate: (value) =>
                      value === password || "Las contraseñas no coinciden",
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.confirmPassword?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCategoria">
                <Form.Label>Categoría (Profesión que ejerce):</Form.Label>
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

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Descripcion (opcional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Descripcion describiendose a usted mismo, esta será vista por todos los usuarios interesados."
                  {...register("descripcion", {
                    minLength: {
                      value: 20,
                      message:
                        "Ingrese una descripcion con mínimo 20 caracteres",
                    },
                    maxLength: {
                      value: 1000,
                      message: `Ingrese una descripcion amplia con máximo 1000 caracteres `,
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.descripcion?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número de Teléfono (sin 15 ni 0 ni -)</Form.Label>
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
                <Button className="btnPrincipal" type="submit">
                  Registrarse
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUpProfessional;

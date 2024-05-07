import "../../styles/signUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../assets/logo_muni_vertical_AZUL.png";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { userRegisterAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const UserSingUp = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm(); 
  
    const onSubmit = async (usuario) => {
        try {
            const response = await userRegisterAPI(usuario);
            reset();
            if (response.user) {
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
            console.error("Error al registrar el usuario:", error);
            Swal.fire({
              title: "Ocurrió un error",
              text: `Intenta esta operación en unos minutos.`,
              icon: "error",
            });
          }
    };
  
    return (
      <>
        <main className="position-relative">
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
              <h1>REGISTRARSE COMO USUARIO</h1>
            </div>
  
            <div className="formContent">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre de usuario"
                    {...register("nombre", {
                      required: "Ingrese su nombre de usuario",
                      minLength: {
                        value: 3,
                        message: "Ingrese un nombre con mínimo 3 caracteres",
                      },
                      maxLength: {
                        value: 30,
                        message: "Ingrese un nombre con máximo 30 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombre?.message}
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
                        message: "Debe ingresar un Email valido.",
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
                          "La contraseña debe tener minimo 6 caracteres, Una mayuscula y un numero",
                      },
                      maxLength: {
                        value: 20,
                        message: "La contraseña debe tener máximo 20 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.password?.message}
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
        </main>
      </>
    );
  };

export default UserSingUp;
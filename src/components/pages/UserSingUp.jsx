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
              src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/251378801_4826907517342542_8931559505337231654_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF9SiF35dffz4DalMzMoWP6vB_XlfWWEg68H9eV9ZYSDopXGgUimN4ZFjsGdm4-PIotal7hjaSqn4EPn_4SBKe5&_nc_ohc=UD3s6L6s1iEAb440Che&_nc_ht=scontent.faep6-1.fna&oh=00_AfCg2zMSinVwYbu6ijCcbD1DaelARCh9XEkBEcyhvtsYow&oe=6625F8BC"
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
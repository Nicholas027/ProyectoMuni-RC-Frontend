import "../../styles/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../assets/logo_muni_vectorized.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { userSignIn } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";

const UserSignIn = ({ setUsuarioLogueado, setUsuarioTipo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (usuario) => {
    try {
      const response = await userSignIn(usuario);

      if (response.status) {
        Swal.fire({
          icon: "success",
          title: "Inicio de Sesión Exitoso",
          text: `Bienvenido ${response.nombre}`,
        });
        navigate("/");
        setUsuarioLogueado(response.email);
        setUsuarioTipo(response.admin ? "admin" : "usuario");
        localStorage.setItem(
          "usuario",
          JSON.stringify({
            email: response.email,
            tipo: response.admin ? "admin" : "usuario",
          })
        );
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `Intenta esta operación en unos minutos.`,
          icon: "error",
          confirmButtonColor: "#004b81",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesion como usuario:", error);
      Swal.fire({
        title: "Ocurrió un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  return (
    <main className="contenedorLogin">
      <img
        src="https://www.eltucumano.com/fotos/cache/notas/2019/02/15/818x460_190215112544_91694.jpg"
        alt="imgFondoLogin"
        className="imgFondo"
      />
      <Form className="w-25 cardLogin" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img src={logoMuni} alt="" width={200} />
          <h2 className="mt-3">Iniciar Sesión Usuario</h2>
        </div>
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            {...register("password", {
              required: "Ingrese su contraseña",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                message: "Email o Contraseña incorrecta",
              },
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>
        <Form.Text className="text-danger">
          {errors.pass?.message || errors.email?.message}
        </Form.Text>
        <Button type="submit" className="btnPrincipal">
          Ingresar
        </Button>
      </Form>
    </main>
  );
};

export default UserSignIn;

import "../../styles/login.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../assets/logo_muni_vectorized.png"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useTitle("Iniciar Sesion Profesional")

  const onSubmit = async (usuario) => {
    
        Swal.fire({
          icon: "success",
          title: "Inicio de Sesión Exitoso",
          text: `Bienvenido ${usuario.email}`,
        });

  };


  return (
    <>
      <div className="contenedorLogin">
        <img
          src="https://www.eltucumano.com/fotos/cache/notas/2019/02/15/818x460_190215112544_91694.jpg"
          alt="imgFondoLogin"
          className="imgFondo"
        />
        <Form className="w-25 cardLogin" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <img src={logoMuni} alt="" width={200}/>
                <h2 className="mt-3">Iniciar Sesión</h2>
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
              {...register("pass", {
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
      </div>
    </>
  );
};

export default Login;

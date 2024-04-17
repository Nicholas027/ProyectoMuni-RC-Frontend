import "../../styles/signUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../assets/logo_muni_vertical_AZUL.png";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { useState } from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (usuario) => {
    console.log(usuario);
  };

  return (
    <>
      <div className="position-relative">
        <div className="backgroundSignUp">
          <img
            src="https://www.eltucumano.com/fotos/cache/notas/2019/02/15/818x460_190215112544_91694.jpg"
            alt="imgProducto"
          />
        </div>

        <Container className="boxContent rounded-4">
          <div className="d-flex">
            <img
              src={logoMuni}
              alt="imgProducto"
              className="rounded-start-4 ms-4 mt-1 me-2"
              width={100}
              height={100}
            />
            <h1 className="display-6 mt-4">Registrarse</h1>
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
                      value: 2,
                      message: "Ingrese un nombre con mínimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
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
                    minLength: {
                      value: 2,
                      message: "Ingrese un nombre con mínimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "Ingrese un nombre con máximo 50 caracteres",
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
                    required: "Ingrese su foto",
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
                  {...register("pass", {
                    required: "Ingrese su contraseña",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
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
                  <option value="Mecanico">Mecanico</option>
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
                <Button className="btnPrincipal" type="submit">Registrarse</Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;

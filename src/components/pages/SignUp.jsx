import "../../styles/signUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../assets/logo_muni_vertical_AZUL.png";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { obtenerProfesionalAPI, professionalRegisterAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const SignUpProfessional = ({ editar, titulo, boton }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(()=>{
    if(editar){
      cargarDatosProfesional();
    }
  },[])

  const { id } = useParams();
  // const navegacion = useNavigate();

  const cargarDatosProfesional = async ()=>{
    const respuesta = await obtenerProfesionalAPI(id);
    if(respuesta.status === 200){
      const profesionalBuscado = await respuesta.json();
      setValue('nombreCompleto', profesionalBuscado.nombreCompleto);
      setValue("foto",profesionalBuscado.foto);
      setValue("dni",profesionalBuscado.dni);
      setValue("password",profesionalBuscado.password);
      setValue("cv",profesionalBuscado.cv);
      setValue("categoria",profesionalBuscado.categoria);
      setValue("descripcion",profesionalBuscado.descripcion);
      setValue("telefono",profesionalBuscado.telefono);
      setValue("email",profesionalBuscado.email);
    }
  }


  const onSubmit = async (usuario) => {
    if (editar) {
      try {
        console.log("Editar el producto.");

      //   //aqui agregar la solicitud a la api para editar un producto
      // console.log('aqui tendria que editar');
      // const respuesta = await modificarProductoAPI(producto, id);
      // if(respuesta.status === 200){
      //   //se modifico el producto
      //   Swal.fire({
      //     title: "Producto modificado",
      //     text: `El producto "${producto.nombreProducto}" fue modificado correctamente`,
      //     icon: "success",
      //   });
      //   //redireccionar
      //   navegacion('/administrador');
      } catch (error) {
        console.error("Error al editar el profesional:", error);
        Swal.fire({
          title: "Ocurrió un error",
          text: `Intenta esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      try {
        usuario.calificacion = 5;
        let telefono = "+549" + usuario.telefono;
        usuario.telefono = telefono;
        const response = await professionalRegisterAPI(usuario);
        reset();
        if (response.profesional) {
          Swal.fire({
            title: "¡Hecho!",
            text: `${response.mensaje}`,
            icon: "success",
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
    }
  };

  return (
    <>
      <div className="position-relative">
        <div className="backgroundSignUp">
          <img
            src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/251378801_4826907517342542_8931559505337231654_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF9SiF35dffz4DalMzMoWP6vB_XlfWWEg68H9eV9ZYSDopXGgUimN4ZFjsGdm4-PIotal7hjaSqn4EPn_4SBKe5&_nc_ohc=UD3s6L6s1iEAb440Che&_nc_ht=scontent.faep6-1.fna&oh=00_AfCg2zMSinVwYbu6ijCcbD1DaelARCh9XEkBEcyhvtsYow&oe=6625F8BC"
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
            <h1>{titulo}</h1>
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
                  {boton}
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

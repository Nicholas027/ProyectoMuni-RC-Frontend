import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import "../../../styles/changePassword.css";
import {
  obtenerProfesionalAPI,
  changePassword,
} from "../../../helpers/queries.js";
import useTitle from "../../../hooks/useTitle";
import Swal from 'sweetalert2';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [nombre, setNombre] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useTitle("Cambiar contraseña - Admin");

  useEffect(() => {
    cargarDatosProfesional();
  }, []);

  const cargarDatosProfesional = async () => {
    const respuesta = await obtenerProfesionalAPI(id);
    if (respuesta.status === 200) {
      const profesionalBuscado = await respuesta.json();
      setNombre(profesionalBuscado.nombreCompleto);
    }
  };

  const onSubmit = async (data) => {
    try {
      const respuesta = await changePassword(data, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Profesional modificado",
          text: `La contraseña de "${nombre}" fue modificada correctamente`,
          icon: "success",
          confirmButtonColor: "#004b81",
          confirmButtonText: "Aceptar",
        });
        navigate("/administrador");
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const newPassword = watch("newPassword", "");
  const confirmPassword = watch("confirmPassword", "");

  return (
    <div className="my-4 container all-contain">
      <h3>Cambiar Contraseña a {nombre}</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="newPassword" className="my-3">
          <Form.Label>Nueva Contraseña</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            {...register("newPassword", { required: true })}
            placeholder="Ingrese la nueva contraseña"
          />
          {errors.newPassword && (
            <Alert variant="danger" className="my-2">
              {errors.newPassword.message || "Este campo es requerido"}
            </Alert>
          )}
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="my-3">
          <Form.Label>Confirmar Nueva Contraseña</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Vuelva a ingresar la nueva contraseña"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === newPassword || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmPassword && (
            <Alert variant="danger" className="my-2">
              {errors.confirmPassword.message || "Las contraseñas no coinciden"}
            </Alert>
          )}
        </Form.Group>

        <Button className="btn-send my-3" type="submit">
          <i className="bi bi-arrow-clockwise"></i> Cambiar Contraseña
        </Button>

        <Button
          onClick={togglePasswordVisibility}
          className="my-3 mx-2 show-pwd-btn"
        >
          {showPassword ? (
            <i className="bi bi-eye-slash"></i>
          ) : (
            <i className="bi bi-eye"></i>
          )}{" "}
          {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;

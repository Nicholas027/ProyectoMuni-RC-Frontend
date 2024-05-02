import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  uploadProfilePhoto,
  obtenerProfesionalAPI,
} from "../../../helpers/queries";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../../styles/changeCV.css";

const ChangePhoto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [nombre, setNombre] = useState("");

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

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (photo) {
        const formData = new FormData();
        formData.append("foto", photo);

        const response = await uploadProfilePhoto(formData, id);

        if (response.status === 200) {
          Swal.fire({
            title: "Profesional modificado",
            text: `La foto de perfil de "${nombre}" fue modificada correctamente`,
            icon: "success",
            confirmButtonColor: "#004b81",
            confirmButtonText: "Aceptar",
          });
          navigate("/administrador");
        }
      } else {
        console.log("No se ha seleccionado ninguna foto");
      }
    } catch (error) {
      console.error("Error al subir la foto de perfil:", error);
    }
  };

  return (
    <Container className="all-container">
      <div>
        <h3 className="my-4">Cambiar o agregar Foto de perfil a {nombre}</h3>
        <p>
          Haz clic en "Seleccionar archivo" para seleccionar la foto y
          luego en el botón enviar para agregarla o cambiarla.
        </p>
      </div>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </Form.Group>
        <button className="mt-4 btn btn-send" type="submit" disabled={!photo}>Enviar</button>
      </Form>
    </Container>
  );
};

export default ChangePhoto;

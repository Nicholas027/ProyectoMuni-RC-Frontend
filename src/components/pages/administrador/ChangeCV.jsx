import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import { obtenerProfesionalAPI, sendCV } from "../../../helpers/queries.js";
import { useParams, useNavigate } from 'react-router-dom'
import "../../../styles/changeCV.css";
import Swal from "sweetalert2";

const ChangeCV = () => {
    const [cv, setCv] = useState(null);
    const [nombre, setNombre] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

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

    const handleCVChange = (e) => {
        const file = e.target.files[0];
        setCv(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (cv) {
                const formData = new FormData();
                formData.append("cv", cv);
                const respuesta = await sendCV(formData, id);
                if (respuesta.status === 200) {
                    Swal.fire({
                      title: "Profesional modificado",
                      text: `El CV de "${nombre}" fue modificado correctamente`,
                      icon: "success",
                      confirmButtonColor: '#004b81',
                      confirmButtonText: 'Aceptar',
                    });
                    navigate("/administrador");
                }
            } else {
                console.log("No se ha seleccionado ningún archivo");
            }
        } catch (error) {
            console.error("Error al enviar el archivo:", error);
        }
    };

    return (
        <Container className="all-container">
            <div>
                <h3 className="my-4">Cambiar o agregar CV a {nombre}</h3>
                <p>Haz clic en "Seleccionar archivo" para seleccionar el currículum y luego en el botón enviar para agregarlo o cambiarlo <b>(solo se admiten imágenes)</b>.</p>
            </div>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group className="mb-3">
                    <Form.Control
                        type="file"
                        accept="image/*"
                        name="cv"
                        id="cv-input"
                        onChange={handleCVChange}
                        className="mt-4"
                    />
                </Form.Group>
                <button className="mt-4 btn btn-send" type="submit" disabled={!cv}>Enviar</button>
            </Form>
        </Container>
    );
};

export default ChangeCV;
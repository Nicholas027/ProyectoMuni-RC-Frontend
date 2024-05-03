import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TermsConditions = () => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const modalMostrado = localStorage.getItem("modalMostrado");
    if (!modalMostrado) {
      setMostrar(true);
    }
  }, []);

  const handleCerrar = () => {
    setMostrar(false);
    localStorage.setItem("modalMostrado", "true");
  };

  return (
    <>
      <Modal show={mostrar} onHide={handleCerrar}>
        <Modal.Header>
          <Modal.Title>
            <span className="text-center tituloModal">
              TÉRMINOS Y CONDICIONES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Al hacer uso de esta página web, usted acepta que la Municipalidad de
          Concepción no se responsabiliza por el incumplimiento de los servicios
          prestados por los profesionales registrados en el portal de oficios.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCerrar}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TermsConditions;

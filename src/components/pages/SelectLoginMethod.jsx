import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/select-login-method.css"
import useTitle from '../../hooks/useTitle';

const SelectLoginMethod = () => {
  useTitle("Ingresar")
  return (
    <Container className="d-flex flex-column align-items-center mt-5 main-container">
      <h2 className="mt-3">¿Cómo deseas ingresar?</h2>
      <p className='text-center mb-4 '>Elige cómo quieres ingresar: como "Profesional" o como "Usuario Normal". Selecciona la opción<br /> que se ajuste a tu perfil para acceder a tu cuenta.</p>
      <Button as={Link} to="/signin" size="lg" className="mb-4 btn-prof">
        Ingresar como Profesional
      </Button>
      <Button as={Link} to="/user/signin" size="lg" className="mb-3 btn-user">
        Ingresar como Usuario Normal
      </Button>
      <Link to="/" className="mt-3 mb-3"><i className="bi bi-arrow-left-circle"></i> Volver al inicio</Link>
    </Container>
  );
};

export default SelectLoginMethod;

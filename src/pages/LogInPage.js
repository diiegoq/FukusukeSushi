import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LogInPage.css'


function IniciarSesion() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container className='iniciarsesion-container'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control required type="email" placeholder="ejemplo@email.com" />
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control required type="password" placeholder="Contraseña" />
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      <div className="boton-texto-div">
        <p className='texto'>¿Olvidaste tu clave?</p>
        
        <Button type="submit">
          Iniciar sesión
        </Button>

        <p className='texto'>¿No tienes cuenta? <Link to="/registrarse" className='registrarse'>Regístrate</Link></p>
      </div>
    </Form>
    </Container>
  );
}

export default IniciarSesion;
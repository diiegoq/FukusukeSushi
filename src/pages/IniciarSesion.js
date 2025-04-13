import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './IniciarSesion.css'

function IniciarSesion() {
  return (
    <Container className='iniciarsesion-container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="ejemplo@email.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
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
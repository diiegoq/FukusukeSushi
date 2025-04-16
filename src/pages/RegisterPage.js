import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './RegisterPage.css'

function Registrarse() {
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
    <Container className='registrarse-container'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control required type="text"/>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Run</Form.Label>
        <Form.Control required type="text" placeholder="Ej: 12345678k"/>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Número de telefono</Form.Label>
        <Form.Control required type="text" placeholder="Ej: 56912345678"/>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Sexo</Form.Label>
        <Form.Select required aria-label="Default select example" className="custom-select">
          <option value="">Seleccionar</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="otro">Otro</option>
          <option value="nada">Prefiero no decir</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Dirección</Form.Label>
        <Form.Control required type="text"/>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>


      <Row>
      <Form.Group as={Col} className="mb-3">
        <Form.Label>Región</Form.Label>
        <Form.Select required aria-label="Default select example" className="custom-select">
          <option value="">Seleccionar</option>
          <option value="valparaiso">Región de Valparaíso</option>
          <option value="santiago">Región Metropolitana</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} className="mb-3">
        <Form.Label>Comuna</Form.Label>
        <Form.Select required aria-label="Default select example" className="custom-select">
          <option value="">Seleccionar</option>
          <option value="valparaiso">Valparaíso</option>
          <option value="quilpue">Quilpué</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} className="mb-3">
        <Form.Label>Provincia</Form.Label>
        <Form.Select required aria-label="Default select example" className="custom-select">
          <option value="">Seleccionar</option>
          <option value="valparaiso">Valparaíso</option>
          <option value="quilpue">Quilpué</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

      </Row>

      <Form.Group  className="mb-3">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control required type="text" placeholder="DD/MM/AAAA"/>
        <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
      </Form.Group>

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

      <p className='texto'></p> {/* para q los botones estén a la misma altura */}

      <Button className="mt-5" type="submit">
        Registrarse
      </Button>

        <p className='texto'>¿Ya tienes cuenta? <Link to="/iniciarsesion" className='iniciar-sesion'>Inicia sesión</Link></p>
      </div>
    </Form>
    </Container>
  );
}

export default Registrarse;
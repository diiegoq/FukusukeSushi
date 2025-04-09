import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardProductComponent from '../components/CardProductComponent';
import imagenTest from '../assets/tablas.jpg';

const Tablas = () => {
  return (
    <Container className="home-container mt-4">
    <Container><h1>Tablas</h1></Container> 
      <Row className="g-4">
        <Col xs={12} sm={6} lg={4}>
          <CardProductComponent 
            imagen={imagenTest}
            titulo="Tabla 40 mix"
            descripcion="Descripción del producto"
            precio={"10.000"}
          />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <CardProductComponent 
            imagen={imagenTest}
            titulo="Tabla 40 mix"
            descripcion="Descripción del producto"
            precio={"10.000"}
          />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <CardProductComponent 
            imagen={imagenTest}
            titulo="Tabla 40 mix"
            descripcion="Descripción del producto"
            precio={"10.000"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Tablas;

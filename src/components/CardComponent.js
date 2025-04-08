import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Card.css';

const CardComponent = ({ imagen, titulo, descripcion, precio }) => {
  const [cantidad, setCantidad] = useState(0);

  return (
    <Container className="card-container mx-auto">
      <Row>
        <Col md={4} className="card-imagen">
          <img src={imagen} alt={titulo} />
        </Col>

        <Col md={8} className="card-detalles">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <div className="card-footer">
            <span>${precio}</span>
            <div className="cantidad-caja">
                <button onClick={() => setCantidad(prev => Math.max(prev - 1, 0))}>-</button>
                <span>{cantidad}</span>
                <button onClick={() => setCantidad(prev => prev + 1)}>+</button>
            </div>
            </div>
        </Col>

      </Row>
    </Container>
  );
};

export default CardComponent;

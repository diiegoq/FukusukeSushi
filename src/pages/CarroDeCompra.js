import React, { useState } from 'react';
import CardComponent from '../components/CardComponent';
import imagenTest from '../assets/tablas.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../data/tablas.json';
import ResumenCompra from '../components/ResumenCompraComponent';

const productos = data.map((producto) => ({
  ...producto,
  imagen: imagenTest,
  cantidad: 1,
}));

const CarroDeCompra = () => {
  const [carrito, setCarrito] = useState(productos);

  const aumentarCantidad = (idx) => {
    const nuevosProductos = [...carrito];
    nuevosProductos[idx].cantidad += 1;
    setCarrito(nuevosProductos);
  };

  const disminuirCantidad = (idx) => {
    const nuevosProductos = [...carrito];
    if (nuevosProductos[idx].cantidad > 1) {
      nuevosProductos[idx].cantidad -= 1;
      setCarrito(nuevosProductos);
    }
  };

  const eliminarProducto = (idx) => {
    const nuevosProductos = carrito.filter((_, index) => index !== idx);
    setCarrito(nuevosProductos);
  };

  // Cálculo del total
  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  return (
    <Container className="home-container mt-4">
      <h1 className="mb-4">Carrito</h1>
      <Row className="gx-4 gy-4">
        {/* Productos */}
        <Col xs={12} lg={8}>
          {carrito.map((producto, idx) => (
            <div key={idx} className="mb-4">
              <CardComponent
                imagen={producto.imagen}
                titulo={producto.titulo}
                precio={producto.precio}
                cantidad={producto.cantidad}
                aumentar={() => aumentarCantidad(idx)}
                disminuir={() => disminuirCantidad(idx)}
                eliminar={() => eliminarProducto(idx)}
              />
            </div>
          ))}
        </Col>

        {/* Resumen de compra con props */}
        <ResumenCompra carrito={carrito} total={25000} envio="Gratis" />
      </Row>
    </Container>
  );
};

export default CarroDeCompra;

import React, { useState } from 'react';
import CardCarritoComponent from '../components/CardCarritoComponent';
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
    if (nuevosProductos[idx].cantidad > 0) {
      nuevosProductos[idx].cantidad -= 1;
      setCarrito(nuevosProductos);
    }
  };

  const eliminarProducto = (idx) => {
    const nuevosProductos = carrito.filter((_, index) => index !== idx);
    setCarrito(nuevosProductos);
  };

  // Calcular total y cantidad total de productos
  const total = carrito.reduce((acc, prod) => acc + prod.precio *1000* prod.cantidad, 0);
  const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  return (
    <Container className="home-container mt-4">
      <h1 className="mb-4">Carrito</h1>
      <Row className="gx-4 gy-4">
        {/* Productos */}
        <Col xs={12} lg={8}>
          {carrito.map((producto, idx) => (
            <div key={idx} className="mb-4">
              <CardCarritoComponent
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

        {/* Resumen de compra actualizado */}
        <ResumenCompra
          carrito={carrito}
          total={total}
          cantidadTotal={cantidadTotal}
          envio="Gratis"
        />
      </Row>
    </Container>
  );
};

export default CarroDeCompra;

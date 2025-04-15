import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import CardProductComponent from '../components/CardProductComponent';
import imagenTest from '../assets/tablas.jpg';
import data from '../data/tablas.json';

const productos = data.map((producto) => ({
  ...producto,
  imagen: imagenTest
}));

const Tablas = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  return (
    <Container className="home-container mt-4">
      <h1 className="mb-4">Tablas</h1>
      <div className="row">
        {productos.map((producto, idx) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={producto.id}>
            <CardProductComponent
              id={producto.id}
              imagen={producto.imagen}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
              precio={producto.precio}
              showModal={showModal}
              setShowModal={setShowModal} // Pasar el estado para controlar el modal
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Tablas;

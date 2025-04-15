import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ProductoDetalle.css'; // Estilos del modal y del contenido

const ProductoDetalle = ({ imagen, titulo, descripcion, precio }) => {
  const [showModal, setShowModal] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Prevenir la propagación de clics en el botón para no abrir el modal cuando se hace clic en el fondo
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento
    // Aquí podrías agregar lógica adicional para manejar el carrito
    console.log("Producto agregado al carrito");
  };

  return (
    <>
      {/* Contenido de producto */}
      <div className="producto">
        <img src={imagen} alt={titulo} className="img-fluid" />
        <h5>{titulo}</h5>
        <p><strong>Descripción:</strong> {descripcion}</p>
        <p><strong>Precio:</strong> ${precio.toLocaleString("es-CL")}</p>
        <Button variant="primary" onClick={handleShowModal}>Agregar al carrito</Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img src={imagen} alt={titulo} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p><strong>Descripción:</strong> {descripcion}</p>
              <p><strong>Precio:</strong> ${precio.toLocaleString("es-CL")}</p>
              <Button variant="primary" onClick={handleAddToCartClick}>Agregar al carrito</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductoDetalle;

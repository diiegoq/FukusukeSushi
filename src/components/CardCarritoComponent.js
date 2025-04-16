import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { Modal, Button } from 'react-bootstrap';


import './CardCarritoComponent.css';

const CardComponent = ({ imagen, titulo, precio, cantidad, aumentar, disminuir, eliminar }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const confirmDelete = () => {
    eliminar();
    handleClose();
  };

  return (
    <div className="card-shop-item mb-3 position-relative">
      <button
        className="position-absolute top-0 end-0 btn btn-link text-danger fs-5"
        onClick={handleShow}
      >
        <TiDeleteOutline />
      </button>


      <div className="row align-items-center g-3">

        {/* Imagen */}
        <div className="col-4 col-sm-2 text-center">
          <img
            src={imagen}
            alt={titulo}
            className="img-fluid rounded"
            style={{ maxHeight: '100px', objectFit: 'contain' }}
          />
        </div>

        {/* Título */}
        <div className="col-8 col-sm-4">
          <h6 className="fw-semibold mb-1">{titulo}</h6>
        </div>

        {/* Cantidad */}
        <div className="col-6 col-sm-3 text-center text-sm-start">
          <div className="d-inline-flex align-items-center px-2 py-1">
            <button className="btn btn-sm px-2 text-white" onClick={disminuir}>−</button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-sm px-2 text-white" onClick={aumentar}>+</button>
          </div>
        </div>

        {/* Precio */}
        <div className="col-6 col-sm-3 text-end">
          <div className="fw-bold fs-5 text-success">
            ${precio.toLocaleString("es-CL")}
          </div>
        </div>

      </div>
      <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Estás seguro de que quieres eliminar este producto?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={confirmDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
      </Modal>

    </div>

    
  );
};

export default CardComponent;

import React from 'react';
import './CardCarrito.css';

const CardComponent = ({ imagen, titulo, precio, cantidad, aumentar, disminuir, eliminar }) => {
  return (
    <div className="card-shop-item mb-3">
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
    </div>
  );
};

export default CardComponent;

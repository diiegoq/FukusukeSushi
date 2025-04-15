import React, { useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Modal, Button, Form } from 'react-bootstrap';
import './CardProductStyle.css';

const CardProductComponent = ({ id, imagen, titulo, descripcion, precio, showModal, setShowModal }) => {
  const [proteina, setProteina] = useState('');
  const [salsas, setSalsas] = useState([]);

  const handleShowModal = (e) => {
    e.stopPropagation(); // Previene propagación por si en el futuro se anida
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSalsaChange = (e) => {
    const { value, checked } = e.target;
    setSalsas((prev) =>
      checked ? [...prev, value] : prev.filter((s) => s !== value)
    );
  };

  return (
    <>
      <div className="card-product card shadow-sm border-0 h-100">
        <img
          src={imagen}
          alt={titulo}
          className="card-img-top img-fluid"
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="card-price">${precio.toLocaleString("es-CL")}</span>
            <button
              className="button d-flex align-items-center gap-2"
              onClick={handleShowModal}
            >
              <BsFillCartPlusFill size={18} />
              Agregar
            </button>
          </div>
        </div>
      </div>

      {/* Modal para mostrar los detalles del producto */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <img src={imagen} alt={titulo} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p><strong>Descripción:</strong> {descripcion}</p>
              <p><strong>Precio base:</strong> ${precio.toLocaleString("es-CL")}</p>

              <Form.Group className="mb-3">
                <Form.Label><strong>Elige una proteína:</strong></Form.Label>
                <Form.Select value={proteina} onChange={(e) => setProteina(e.target.value)}>
                  <option value="">Selecciona</option>
                  <option value="pollo">Pollo</option>
                  <option value="soya">Soya</option>
                  <option value="res">Res</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><strong>Agrega salsas ($500 c/u):</strong></Form.Label>
                <div className="d-flex flex-column">
                  <Form.Check
                    type="checkbox"
                    label="Teriyaki"
                    value="teriyaki"
                    onChange={handleSalsaChange}
                    checked={salsas.includes("teriyaki")}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Soya dulce"
                    value="soyaDulce"
                    onChange={handleSalsaChange}
                    checked={salsas.includes("soyaDulce")}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Picante"
                    value="picante"
                    onChange={handleSalsaChange}
                    checked={salsas.includes("picante")}
                  />
                </div>
              </Form.Group>

              <Button variant="primary" onClick={() => alert('Producto agregado con opciones')}>
                Agregar al carrito
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardProductComponent;

import { useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Modal, Button, Form } from 'react-bootstrap';
import './ProductoModal.css';

const ProductoModal = ({ show, onClose, imagen, titulo, descripcion, precio }) => {
  const [salsa1, setSalsa1] = useState('');
  const [salsa2, setSalsa2] = useState('');
  const [extras, setExtras] = useState([]);

  const handleExtraChange = (e) => {
    const { value, checked } = e.target;
    setExtras((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleAddToCartClick = () => {
    const productoSeleccionado = {
      titulo,
      precio,
      salsa1,
      salsa2,
      extras,
    };

    console.log('Producto agregado:', productoSeleccionado);
    onClose(); // cerrar modal
  };

  return (
    <Modal show={show} onHide={onClose} centered size="lg" contentClassName="producto-modal-content">
      <Modal.Body className="producto-modal-body">
        <div className="producto-modal-card">
          <img
            src={imagen}
            alt={titulo}
            className="producto-modal-img card-img-top img-fluid"
          />
          <div className="producto-modal-body card-body">
            <h5 className="producto-modal-title card-title">{titulo}</h5>
            <p className="producto-modal-text card-text">{descripcion}</p>

            <Form>
              <div className="mb-3">
                <h6 className="fw-semibold">
                  Salsa Nº1 <span className="text-muted small">(Opcional)</span>
                </h6>
                <Form.Check
                  type="radio"
                  label="Soya"
                  name="salsa1"
                  value="Soya"
                  onChange={(e) => setSalsa1(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Unagui"
                  name="salsa1"
                  value="Unagui"
                  onChange={(e) => setSalsa1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <h6 className="fw-semibold">
                  Salsa Nº2 <span className="text-muted small">(Opcional)</span>
                </h6>
                <Form.Check
                  type="radio"
                  label="Soya"
                  name="salsa2"
                  value="Soya"
                  onChange={(e) => setSalsa2(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Unagui"
                  name="salsa2"
                  value="Unagui"
                  onChange={(e) => setSalsa2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <h6 className="fw-semibold">Salsas Extras</h6>
                <Form.Check
                  type="checkbox"
                  label="Picante (+$500)"
                  value="Picante"
                  onChange={handleExtraChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Teriyaki (+$800)"
                  value="Teriyaki"
                  onChange={handleExtraChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Agridulce (+$600)"
                  value="Agridulce"
                  onChange={handleExtraChange}
                />
              </div>

              <div className="mb-4">
                <h6 className="fw-semibold">Acompañamientos</h6>
                <Form.Check
                  type="checkbox"
                  label="Gyosas (3 unidades) (+$1000)"
                  value="Gyosas"
                  onChange={handleExtraChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Bolitas de queso (2 unidades) (+$700)"
                  value="Bolitas de queso"
                  onChange={handleExtraChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Palitos tempura (+$500)"
                  value="Palitos tempura"
                  onChange={handleExtraChange}
                />
              </div>
            </Form>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <span className="fw-bold fs-5">${precio.toLocaleString('es-CL')}</span>
              <Button
                variant="success"
                className="producto-modal-button"
                onClick={handleAddToCartClick}
              >
                <BsFillCartPlusFill className="me-2" />
                Agregar
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductoModal;

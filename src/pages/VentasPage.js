import React, { useState } from 'react';
import { Container, Modal, Button, Table, Form, Row, Col } from 'react-bootstrap';
import data from '../data/boletas.json';
import BoletaComponent from '../components/BoletaComponent.js';
import './VentasPage.css';

const formatFecha = (fecha) => {
  const date = new Date(fecha);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const boletas = data.map((boleta) => ({
  id_boleta: boleta.id_boleta,
  fecha_hora: formatFecha(boleta.fecha_hora),
  monto_total: boleta.monto_total,
  metodo_pago: boleta.metodo_pago,
  cliente: boleta.cliente
}));

const Ventas = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBoleta, setSelectedBoleta] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [clienteFilter, setClienteFilter] = useState('');
  const [fechaFilter, setFechaFilter] = useState('');

  const handleShowModal = (boleta) => {
    setSelectedBoleta(boleta);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBoleta(null);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredBoletas = boletas.filter((boleta) => {
    const clienteMatch = boleta.cliente.toLowerCase().includes(clienteFilter.toLowerCase());
    const fechaMatch = boleta.fecha_hora.includes(fechaFilter);
    return clienteMatch && fechaMatch;
  });

  return (
    <Container className="home-container mt-4">
      <h1 className="mb-4 text-center">Ventas</h1>

      {/* Botón para mostrar/ocultar filtros */}
      <Row className="filter-buttons mb-4">
        <Col xs={12}>
          <Button onClick={toggleFilters}>
            Filtrar
          </Button>
        </Col>
      </Row>

      {/* Campos de filtrado */}
      {showFilters && (
        <Row className="mb-4">
          <Col xs={12} md={6} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Filtrar por cliente"
              value={clienteFilter}
              onChange={(e) => setClienteFilter(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Filtrar por fecha (DD/MM/YYYY)"
              value={fechaFilter}
              onChange={(e) => setFechaFilter(e.target.value)}
            />
          </Col>
        </Row>
      )}

      {/* Tabla de boletas */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Método de Pago</th>
            <th>Fecha</th>
            <th>Monto Total</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          {filteredBoletas.map((boleta) => (
            <tr
              key={boleta.id_boleta}
              onClick={() => handleShowModal(boleta)}
              style={{ cursor: 'pointer' }}
            >
              <td>{boleta.metodo_pago}</td>
              <td>{boleta.fecha_hora}</td>
              <td>${boleta.monto_total}</td>
              <td>{boleta.cliente}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de detalles */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Boleta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBoleta && (
            <BoletaComponent
              id={selectedBoleta.id_boleta}
              fecha_hora={selectedBoleta.fecha_hora}
              monto_total={selectedBoleta.monto_total}
              metodo_pago={selectedBoleta.metodo_pago}
              cliente={selectedBoleta.cliente}
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Ventas;

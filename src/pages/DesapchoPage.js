import React, { useState } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import data from '../data/pedidos.json'; // archivo de datos de pedidos
import './DespachoPage.css';

const formatFecha = (fecha) => {
  const date = new Date(fecha);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const pedidos = data.map((pedido) => ({
  id: pedido.id,
  nombreCliente: pedido.nombre_cliente,
  direccionEntrega: pedido.direccion_entrega,
  estado: pedido.estado,
  fechaPedido: formatFecha(pedido.fecha_pedido),
  tipoPago: pedido.tipo_pago
}));

const Despacho = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState(null);

  const handleShowModal = (pedido) => {
    setSelectedPedido(pedido);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPedido(null);
  };

  const pedidosActivos = pedidos.filter(pedido => pedido.estado === 'activo');

  const openMap = (direccion) => {
    const url = `https://www.google.com/maps?q=${encodeURIComponent(direccion)}`;
    window.open(url, '_blank');
  };

  const handleTerminarPedido = (id) => {
    const updatedPedidos = pedidos.map((pedido) => 
      pedido.id === id ? { ...pedido, estado: 'terminado' } : pedido
    );
    alert(`Pedido ${id} ha sido marcado como terminado.`);
  };

  return (
    <Container className="home-container mt-4">
      <h1 className="mb-4 text-center">Pedidos Activos - Despacho</h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID Pedido</th>
            <th>Nombre Cliente</th>
            <th>Dirección de Entrega</th>
            <th>Fecha de Pedido</th>
            <th>Tipo de Pago</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidosActivos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.nombreCliente}</td>
              <td>{pedido.direccionEntrega}</td>
              <td>{pedido.fechaPedido}</td>
              <td>{pedido.tipoPago}</td>
              <td>
                <Button className="btn-details" variant="info" onClick={() => handleShowModal(pedido)}>
                  Ver Detalles
                </Button>
                <Button className="btn-map" variant="secondary" onClick={() => openMap(pedido.direccionEntrega)}>
                  Ver Mapa
                </Button>
                <Button className="btn-finish" variant="success" onClick={() => handleTerminarPedido(pedido.id)}>
                  Terminar Pedido
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal} className="sin-footer">
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPedido && (
            <div>
              <p><strong>ID Pedido:</strong> {selectedPedido.id}</p>
              <p><strong>Nombre Cliente:</strong> {selectedPedido.nombreCliente}</p>
              <p><strong>Dirección de Entrega:</strong> {selectedPedido.direccionEntrega}</p>
              <p><strong>Estado:</strong> {selectedPedido.estado}</p>
              <p><strong>Fecha de Pedido:</strong> {selectedPedido.fechaPedido}</p>
              <p><strong>Tipo de Pago:</strong> {selectedPedido.tipoPago}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Despacho;

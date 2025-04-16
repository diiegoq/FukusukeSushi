import React, { useState } from 'react';
import { Container, Modal, Button, Table, Form, Row, Col } from 'react-bootstrap';
import data from '../data/usuarios.json'; // archivo de datos de usuarios

const formatFecha = (fecha) => {
  const date = new Date(fecha);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const usuarios = data.map((usuario) => ({
  id: usuario.id,
  nombre: usuario.nombre,
  correo: usuario.correo,
  direccion: usuario.direccion,
  cantidad_compras: usuario.cantidad_compras,
  puntos: usuario.puntos,
  tipo: usuario.tipo,
  estado: usuario.estado,
  fecha_registro: formatFecha(usuario.fecha_registro)
}));

const Usuarios = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [nombreFilter, setNombreFilter] = useState('');
  const [correoFilter, setCorreoFilter] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');

  const handleShowModal = (usuario) => {
    setSelectedUsuario(usuario);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUsuario(null);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredUsuarios = usuarios.filter((usuario) => {
    const nombreMatch = usuario.nombre.toLowerCase().includes(nombreFilter.toLowerCase());
    const correoMatch = usuario.correo.toLowerCase().includes(correoFilter.toLowerCase());
    const tipoMatch = usuario.tipo.toLowerCase().includes(tipoFilter.toLowerCase());
    return nombreMatch && correoMatch && tipoMatch;
  });

  return (
    <Container className="home-container mt-4">
      <h1 className="mb-4 text-center">Administrar Usuarios</h1>

      <Row className="filter-buttons mb-4">
        <Col xs={12}>
          <Button onClick={toggleFilters}>Filtrar</Button>
        </Col>
      </Row>

      {showFilters && (
        <Row className="mb-4">
          <Col xs={12} md={4} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Filtrar por nombre"
              value={nombreFilter}
              onChange={(e) => setNombreFilter(e.target.value)}
            />
          </Col>
          <Col xs={12} md={4} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Filtrar por correo"
              value={correoFilter}
              onChange={(e) => setCorreoFilter(e.target.value)}
            />
          </Col>
          <Col xs={12} md={4} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Filtrar por tipo (cliente/admin/empleado)"
              value={tipoFilter}
              onChange={(e) => setTipoFilter(e.target.value)}
            />
          </Col>
        </Row>
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Dirección</th>
            <th>Cantidad Compras</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsuarios.map((usuario) => (
            <tr
              key={usuario.id}
              onClick={() => handleShowModal(usuario)}
              style={{ cursor: 'pointer' }}
            >
              <td>{usuario.nombre}</td>
              <td>{usuario.tipo}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.cantidad_compras}</td>
              <td>{usuario.puntos}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal} className="sin-footer">
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUsuario && (
            <div>
              <p><strong>Nombre:</strong> {selectedUsuario.nombre}</p>
              <p><strong>Correo:</strong> {selectedUsuario.correo}</p>
              <p><strong>Dirección:</strong> {selectedUsuario.direccion}</p>
              <p><strong>Cantidad de Compras:</strong> {selectedUsuario.cantidad_compras}</p>
              <p><strong>Puntos:</strong> {selectedUsuario.puntos}</p>
              <p><strong>Tipo:</strong> {selectedUsuario.tipo}</p>
              <p><strong>Estado:</strong> {selectedUsuario.estado}</p>
              <p><strong>Fecha de Registro:</strong> {selectedUsuario.fecha_registro}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Usuarios;

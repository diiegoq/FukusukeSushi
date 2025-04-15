import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import productosData from '../data/tablas.json';
import rollsData from '../data/rolls.json';

const AdminProductos = () => {
  const [productos, setProductos] = useState(productosData);
  const [rolls, setRolls] = useState(rollsData);

  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoActual, setProductoActual] = useState({
    id: null,
    titulo: '',
    descripcion: '',
    precio: ''
  });

  const [tipoModal, setTipoModal] = useState('producto'); // 'producto' o 'roll'

  const handleShowAgregar = (tipo) => {
    setModoEdicion(false);
    setTipoModal(tipo);
    setProductoActual({ id: null, titulo: '', descripcion: '', precio: '' });
    setShowModal(true);
  };

  const handleShowEditar = (tipo, item) => {
    setModoEdicion(true);
    setTipoModal(tipo);
    setProductoActual(item);
    setShowModal(true);
  };

  const handleEliminar = (tipo, id) => {
    const confirmar = window.confirm('¿Estás seguro que deseas eliminar este elemento?');
    if (!confirmar) return;

    if (tipo === 'producto') {
      setProductos(productos.filter(p => p.id !== id));
    } else {
      setRolls(rolls.filter(r => r.id !== id));
    }
  };

  const handleGuardar = () => {
    if (modoEdicion) {
      if (tipoModal === 'producto') {
        setProductos(productos.map(p => (p.id === productoActual.id ? productoActual : p)));
      } else {
        setRolls(rolls.map(r => (r.id === productoActual.id ? productoActual : r)));
      }
    } else {
      const nuevo = { ...productoActual, id: Date.now() };
      if (tipoModal === 'producto') {
        setProductos([...productos, nuevo]);
      } else {
        setRolls([...rolls, nuevo]);
      }
    }
    setShowModal(false);
  };

  const renderTabla = (items, tipo) => (
    <>
      <h3 className="mt-5">Administración de {tipo === 'producto' ? 'Productos' : 'Rolls'}</h3>
      <Button className="mb-3" variant="success" onClick={() => handleShowAgregar(tipo)}>
        + Agregar {tipo === 'producto' ? 'Producto' : 'Roll'}
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.titulo}</td>
              <td>{item.descripcion}</td>
              <td>${item.precio}</td>
              <td>
                <Button size="sm" variant="primary" className="me-2" onClick={() => handleShowEditar(tipo, item)}>
                  Editar
                </Button>
                <Button size="sm" variant="danger" onClick={() => handleEliminar(tipo, item.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );

  return (
    <Container className="mt-4">
      {renderTabla(productos, 'producto')}
      {renderTabla(rolls, 'roll')}

      <Modal show={showModal} onHide={() => setShowModal(false)} className="modal-con-footer">
        <Modal.Header closeButton>
          <Modal.Title>
            {modoEdicion
              ? `Editar ${tipoModal === 'producto' ? 'Producto' : 'Roll'}`
              : `Agregar ${tipoModal === 'producto' ? 'Producto' : 'Roll'}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                value={productoActual.titulo}
                onChange={(e) => setProductoActual({ ...productoActual, titulo: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={productoActual.descripcion}
                onChange={(e) => setProductoActual({ ...productoActual, descripcion: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={productoActual.precio}
                onChange={(e) => setProductoActual({ ...productoActual, precio: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleGuardar}>
            {modoEdicion ? 'Guardar Cambios' : 'Agregar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminProductos;

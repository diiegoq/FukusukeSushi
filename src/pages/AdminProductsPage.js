import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productosData from '../data/tablas.json';
import rollsData from '../data/rolls.json';
import imgTabla from '../assets/tablas.jpg';
import imgRoll from '../assets/rolls.jpg';
import './AdminProducts.css';

const AdminProductos = () => {
  const [productos, setProductos] = useState(productosData);
  const [rolls, setRolls] = useState(rollsData);
  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoActual, setProductoActual] = useState({
    id: null,
    titulo: '',
    descripcion: '',
    precio: '',
    imagen: imgTabla, // Imagen predeterminada para todos los productos
  });

  const [tipoModal, setTipoModal] = useState('producto');
  const [busquedaProductos, setBusquedaProductos] = useState('');
  const [busquedaRolls, setBusquedaRolls] = useState('');

  const handleShowAgregar = (tipo) => {
    setModoEdicion(false);
    setTipoModal(tipo);
    setProductoActual({ id: null, titulo: '', descripcion: '', precio: '', imagen: imgTabla }); // Imagen predeterminada
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
      const nuevo = { ...productoActual, id: Date.now() }; // Usar imagen predeterminada al crear
      if (tipoModal === 'producto') {
        setProductos([...productos, nuevo]);
      } else {
        setRolls([...rolls, nuevo]);
      }
    }
    setShowModal(false);
  };

  const filtrar = (items, texto) => {
    return items.filter((item) =>
      item.titulo.toLowerCase().includes(texto.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(texto.toLowerCase())
    );
  };

  const renderCards = (items, tipo) => {
    const busqueda = tipo === 'producto' ? busquedaProductos : busquedaRolls;
    const setBusqueda = tipo === 'producto' ? setBusquedaProductos : setBusquedaRolls;
    const itemsFiltrados = filtrar(items, busqueda);

    return (
      <div>
        <Row className="align-items-center mt-5 mb-3">
          <Col xs={12} md={6}>
            <h3 className="text-white">Administración de {tipo === 'producto' ? 'Tablas' : 'Rolls'}</h3>
          </Col>
          <Col xs={12} md={6} className="text-md-end mt-2 mt-md-0">
            <Button className="btn-agregar" onClick={() => handleShowAgregar(tipo)}>
              + Agregar {tipo === 'producto' ? 'Producto' : 'Roll'}
            </Button>
          </Col>
        </Row>

        <Form.Control
          type="text"
          placeholder={`Buscar ${tipo === 'producto' ? 'producto' : 'roll'}...`}
          className="mb-3 bg-transparent text-white border-light"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {itemsFiltrados.map(item => (
            <Col key={item.id}>
              <div className="card p-3 mb-3 d-flex flex-column">
                <img 
                  src={item.imagen || (tipo === 'producto' ? imgTabla : imgRoll)} 
                  alt={item.titulo} 
                  className="card-img-top" 
                  style={{ objectFit: 'cover', height: '200px' }} // Controlamos la altura y el ajuste de las imágenes
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.titulo}</h5>
                  <p className="card-text">{item.descripcion}</p>
                  <p className="card-text fw-bold">${item.precio}</p>
                  <div className="d-flex gap-2 mt-auto">
                    <Button 
                      size="sm" 
                      className="btn-editar" 
                      onClick={() => handleShowEditar(tipo, item)}
                    >
                      Editar
                    </Button>
                    <Button 
                      size="sm" 
                      className="btn-eliminar" 
                      onClick={() => handleEliminar(tipo, item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    <Container className="mt-4">
      {renderCards(productos, 'producto')}
      {renderCards(rolls, 'roll')}

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
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleGuardar}>
            {modoEdicion ? 'Guardar Cambios' : 'Agregar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminProductos;

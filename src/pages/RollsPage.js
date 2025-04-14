import Container from 'react-bootstrap/Container';
import CardProductComponent from '../components/CardProductComponent';
import imagenTest from '../assets/rolls.jpg';
import data from '../data/rolls.json';

const productos = data.map((producto) => ({
  ...producto,
  imagen: imagenTest
}));

const Rolls = () => {
  return (
    <Container className="home-container mt-4">
      <h1 className="mb-4">Rolls</h1>
      <div className="row">
        {productos.map((producto, idx) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
          <CardProductComponent
            imagen={producto.imagen}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        </div>          
        ))}
      </div>
    </Container>
  );
};

export default Rolls;

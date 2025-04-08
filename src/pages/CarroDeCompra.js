import CardComponent from '../components/CardComponent';
import imagenTest from '../assets/horarios.jpg';
import { Container } from 'react-bootstrap';

const CarroDeCompra = () => {
  return (
    <div>
      <Container><h1>Carrito de Compras</h1></Container> 
      <CardComponent
        imagen={imagenTest}
        titulo="Tabla Seba Mendoiz"
        descripcion="Descripción del producto"
        precio={10000}
      />

      <CardComponent
        imagen={imagenTest}
        titulo="Producto 2"
        descripcion="Descripción del producto"
        precio={10000}
      />
      <Container><h1>¿Olvidaste algo?</h1></Container> 

      <CardComponent
        imagen={imagenTest}
        titulo="Producto 2"
        descripcion="Descripción del producto"
        precio={10000}
      />

      
    </div>
    

  );
};

export default CarroDeCompra;

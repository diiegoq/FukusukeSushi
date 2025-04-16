import { Link } from 'react-router-dom';

import './HomePage.css';
import Imagen from '../components/ImagenComponent'
import imgVentas from '../assets/ventas.png'
import imgUsuarios from '../assets/usuarios.jpg'
import imgProductos from '../assets/productos.jpg'
import imgDespacho from '../assets/despacho.jpg'

const HomeAdmin = () => {
  return (
    <div className="home-container">

      <Link to="/productos-admin" style={{ textDecoration: 'none' }}>
        <Imagen class="producto"
          backgroundImage={imgProductos}
          title="PRODUCTOS" 
          description=""
          alignItems="flex-end"  
          margin="20px 20px 20px 20px"
        />
      </Link>
    
      <Link to="/ventas" style={{ textDecoration: 'none' }}>
            <Imagen className="producto"
            backgroundImage={imgVentas}
            title="VENTAS" 
            description=""
            alignItems="flex-end"  
            margin="20px 20px 20px 20px" 
            />
        </Link>

        <Link to="/usuarios" style={{ textDecoration: 'none' }}>
            <Imagen className="producto"
            backgroundImage={imgUsuarios}
            title="USUARIOS" 
            description=""
            alignItems="flex-end"  
            margin="20px 20px 20px 20px" 
            />
        </Link>

        <Link to="/despacho" style={{ textDecoration: 'none' }}>
        <Imagen class="producto"
          backgroundImage={imgDespacho}
          title="DESPACHO" 
          description=""
          alignItems="flex-end"  
          margin="20px 20px 20px 20px"
        />
      </Link>
    </div>

  );
};

export default HomeAdmin;

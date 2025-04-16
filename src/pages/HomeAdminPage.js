import { Link } from 'react-router-dom';

import './HomePage.css';
import Imagen from '../components/ImagenComponent'
import imgVentas from '../assets/ventas.png'
import imgCocktail from '../assets/cocktail.jpg'

const HomeAdmin = () => {
  return (
    <div className="home-container">

      <Link to="/productos-admin" style={{ textDecoration: 'none' }}>
        <Imagen class="producto"
          backgroundImage={imgCocktail}
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

        <Link to="/cocteleria" style={{ textDecoration: 'none' }}>
            <Imagen className="producto"
            backgroundImage={imgCocktail}
            title="USUARIOS" 
            description=""
            alignItems="flex-end"  
            margin="20px 20px 20px 20px" 
            />
        </Link>
    </div>

  );
};

export default HomeAdmin;

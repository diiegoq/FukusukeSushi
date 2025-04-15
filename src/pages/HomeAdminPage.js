import { Link } from 'react-router-dom';

import './HomePage.css';
import Imagen from '../components/ImagenComponent'
import imgTabla from '../assets/tablas.jpg'
import imgCocktail from '../assets/cocktail.jpg'

const HomeAdmin = () => {
  return (
    <div className="home-container">

      <Link to="/tablas" style={{ textDecoration: 'none' }}>
        <Imagen class="producto"
          backgroundImage={imgTabla}
          title="PRODUCTOS" 
          description=""
          alignItems="flex-end"  
          margin="20px 20px 20px 20px"
        />
      </Link>
    
      <Link to="/ventas" style={{ textDecoration: 'none' }}>
            <Imagen className="producto"
            backgroundImage={imgCocktail}
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

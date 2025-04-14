import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import './Home.css';
import Imagen from './../components/ImagenComponent'

import horariosImage from '../assets/horario.jpg'
import imgTabla from '../assets/tablas.jpg'
import imgRolls from '../assets/rolls.jpg'
import imgCocktail from '../assets/cocktail.jpg'

const Home = () => {
  return (
    <div className="home-container">
      
      <Imagen
        backgroundImage={horariosImage}
        title="HORARIOS" 
        description="12:00 a 21:00 hrs"
        alignItems="center" 
        margin="20px 0px 0px 0px"
        color="black"
        animacion={false}
      />

      <Container className='titulos-container'><h1>PRODUCTOS</h1></Container>

      <Link to="/tablas" style={{ textDecoration: 'none' }}>
        <Imagen class="producto"
          backgroundImage={imgTabla}
          title="Tablas" 
          description=""
          alignItems="flex-end"  
          margin="20px 20px 20px 20px"
        />
      </Link>

      
      <Link to="/rolls" style={{ textDecoration: 'none' }}>
        <Imagen className="producto"
          backgroundImage={imgRolls}
          title="Rolls" 
          description=""
          alignItems="flex-end" 
          margin="20px 20px 20px 20px" 
          min-height = "10vh"
        />
      </Link>
    
      <Link to="/cocteleria" style={{ textDecoration: 'none' }}>
        <Imagen className="producto"
          backgroundImage={imgCocktail}
          title="Coctelería" 
          description=""
          alignItems="flex-end"  
          margin="20px 20px 20px 20px" 
        />
    </Link>
    </div>

  );
};

export default Home;

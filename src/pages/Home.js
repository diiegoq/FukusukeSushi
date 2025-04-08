import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Imagen from './../components/ImagenComponent'
import horariosImage from '../assets/horarios.jpg';

const Home = () => {
  return (
    <div className="home-container">
    <Imagen 
      backgroundImage={horariosImage}
      title="HORARIOS" 
      description="12:00 a 21:00 hrs"
      alignItems="center" 
      margin="20px 0px 0px 0px"
    />

  <Container className='titulos-container'><h1>PRODUCTOS</h1></Container>

    <Imagen 
      backgroundImage={horariosImage}
      title="Tablas" 
      description=""
      alignItems="flex-end"  
      
      margin="20px 20px 20px 20px"
    />
    <Imagen 
      backgroundImage={horariosImage}
      title="Rolls" 
      description=""
      alignItems="flex-end" 
      margin="20px 20px 20px 20px" 
    />
    <Imagen 
      backgroundImage={horariosImage}
      title="Coctelería" 
      description=""
      alignItems="flex-end"  
      margin="20px 20px 20px 20px" 
    />


  </div>

  );
};

export default Home;

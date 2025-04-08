import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png';
import './Navbar.css';
import { CiShoppingCart, CiUser } from "react-icons/ci";


function NavbarComponent() {
  return (
    <Navbar className="navbar">

        <Navbar.Brand href="/" className='icono-sushi'>
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Logo"
          />  
        </Navbar.Brand>

        <Nav className="ms-auto otros-links">
            <Nav.Link href="carrito"><CiShoppingCart className='iconos-react'/></Nav.Link>
            <Nav.Link href="iniciarsesion"><CiUser className='iconos-react'/></Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
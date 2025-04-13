import { Outlet, Link } from "react-router-dom";
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent'
import './Layout.css';


const Layout = () => {
  return (
    <>
      <NavbarComponent />

      <main><Outlet /></main>

      <FooterComponent />
    </>
  )
};

export default Layout;
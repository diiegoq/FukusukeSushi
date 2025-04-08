import { Outlet, Link } from "react-router-dom";
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent'

const Layout = () => {
  return (
    <>
      <NavbarComponent />

      <Outlet />

      <FooterComponent />
    </>
  )
};

export default Layout;
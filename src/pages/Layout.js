import { Outlet, Link } from "react-router-dom";
import NavbarComponent from '../components/NavbarComponent';

const Layout = () => {
  return (
    <>
      <NavbarComponent />

      <Outlet />
    </>
  )
};

export default Layout;
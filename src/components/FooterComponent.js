import React from 'react';
import { Link } from 'react-router-dom';

import './FooterComponent.css';

import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="footer">

      <div className="footer-content">
        <p>&copy; 2025 Fukusuke Sushi</p>
        
        <div className="footer-links">
          <Link to="/" className='iconos-contacto'><CiFacebook /></Link>
          <Link to="/" className='iconos-contacto'><FaInstagram /></Link>
          <Link to="/" className='iconos-contacto'><FaTiktok /></Link>
        </div>
      </div>

    </footer>
  );
};

export default FooterComponent;

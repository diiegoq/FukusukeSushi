import React from 'react';
import './Imagen.css';

const Imagen = ({ backgroundImage, title, description, alignItems, margin }) => {
  return (
    <div
      className="imagen-container"
      style={{ backgroundImage: `url(${backgroundImage})`, margin: margin }}
    >
      <div className="imagen-content" style={{ alignItems: alignItems }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Imagen;

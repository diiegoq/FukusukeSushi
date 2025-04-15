import React from 'react';
import './ImagenComponent.css';

const Imagen = ({ backgroundImage, title, description, alignItems, margin, animacion = true }) => {
  const nombreContainer = `imagen-container${animacion ? ' imagen-animated' : ''}`;
  
  return (
    <div
      className={nombreContainer}
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

import './CardProduct.css';
import { BsFillCartPlusFill } from 'react-icons/bs'; // Cambié el icono a un carrito lleno

const CardProductComponent = ({ imagen, titulo, descripcion, precio }) => {
  return (
    <div className="card-product d-flex flex-column flex-md-row shadow-sm border-0">
      <img
        src={imagen}
        alt={titulo}
        className="card-img-top img-fluid rounded"
        style={{ maxWidth: '200px', objectFit: 'cover' }}
      />
      <div className="card-product-content d-flex flex-column justify-content-between p-3">
        <h2 className="card-product-title">{titulo}</h2>
        <p className="card-product-description">{descripcion}</p>
        <div className="card-product-footer d-flex justify-content-between align-items-center">
          <span className="card-product-price fw-bold">${precio}</span>
          <button className="card-product-button d-flex align-items-center gap-2">
            <BsFillCartPlusFill size={18} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProductComponent;

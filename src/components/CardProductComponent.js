import { BsFillCartPlusFill } from 'react-icons/bs';
import './CardProductStyle.css'

const CardProductComponent = ({ imagen, titulo, descripcion, precio }) => {
  return (
    <div className="card-product">
        <div className="card-product card shadow-sm border-0 h-100">
        <img
          src={imagen}
          alt={titulo}
          className="card-img-top img-fluid"
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="card-price">${precio}</span>
            <button className="button d-flex align-items-center gap-2">
              <BsFillCartPlusFill size={18} />
              Agregar
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductComponent;

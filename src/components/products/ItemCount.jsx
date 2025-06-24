import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="mb-4">
      <div className="d-flex align-items-center mb-3">
        <div className="input-group" style={{ width: '150px' }}>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleDecrement}
            disabled={count <= 1}
          >
            <Minus size={16} />
          </button>
          <input
            type="text"
            className="form-control text-center fw-bold"
            value={count}
            readOnly
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleIncrement}
            disabled={count >= stock}
          >
            <Plus size={16} />
          </button>
        </div>
        <small className="text-muted ms-3">
          {stock} disponibles
        </small>
      </div>
      
      <button
        onClick={handleAddToCart}
        disabled={stock === 0}
        className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center"
      >
        <ShoppingCart size={20} className="me-2" />
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
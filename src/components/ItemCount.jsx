import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const handleAdd = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
      <button className="btn btn-outline-primary" onClick={decrement} style={{ fontSize: '1.2rem' }}>-</button>
      <span style={{ minWidth: 30, textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>{count}</span>
      <button className="btn btn-outline-primary" onClick={increment} style={{ fontSize: '1.2rem' }}>+</button>
      <button
        className="btn btn-success ms-2"
        onClick={handleAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount; 
import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <button onClick={decrement} style={{ fontSize: '1.2rem', padding: '0.3rem 0.8rem' }}>-</button>
      <span style={{ minWidth: 30, textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>{count}</span>
      <button onClick={increment} style={{ fontSize: '1.2rem', padding: '0.3rem 0.8rem' }}>+</button>
      <button
        style={{
          marginLeft: '10px',
          background: added ? '#28a745' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '0.3rem 1rem',
          fontWeight: 'bold',
          transition: 'background 0.2s',
          cursor: 'pointer',
        }}
        onClick={handleAdd}
      >
        {added ? '¡Agregado!' : 'Agregar al carrito'}
      </button>
    </div>
  );
}

export default ItemCount; 
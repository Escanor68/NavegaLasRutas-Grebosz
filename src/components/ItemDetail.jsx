import ItemCount from "./ItemCount";
import './ItemDetail.css';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

function ItemDetail({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p className="fw-bold">Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      {added && <div className="alert alert-success mt-3">¡Producto agregado al carrito!</div>}
    </div>
  );
}

export default ItemDetail; 
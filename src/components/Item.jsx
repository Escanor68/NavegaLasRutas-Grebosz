import { Link } from "react-router-dom";
import './Item.css';

function Item({ product }) {
  return (
    <div className="item">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width={100} />
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item; 
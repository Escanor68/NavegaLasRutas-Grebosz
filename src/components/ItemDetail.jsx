import ItemCount from "./ItemCount";
import './ItemDetail.css';

function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default ItemDetail; 
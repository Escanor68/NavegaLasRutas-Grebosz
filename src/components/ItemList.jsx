import Item from "./Item";
import './ItemList.css';

function ItemList({ products }) {
  if (!products.length) return <p>No hay productos para mostrar.</p>;
  return (
    <div className="item-list">
      {products.map(product => (
        <div className="item-card" key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
}

export default ItemList; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://dummyjson.com/products/${itemId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .finally(() => setLoading(false));
    }, 1000);
  }, [itemId]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;
  return <ItemDetail product={product} />;
}

export default ItemDetailContainer; 
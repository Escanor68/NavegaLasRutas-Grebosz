import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = "https://dummyjson.com/products";
    if (categoryId) url = `https://dummyjson.com/products/category/${categoryId}`;
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data.products || data))
        .finally(() => setLoading(false));
    }, 1000);
  }, [categoryId]);

  if (loading) return <p>Cargando...</p>;
  return <ItemList products={products} />;
}

export default ItemListContainer; 
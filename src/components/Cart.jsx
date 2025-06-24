import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/carts/1")
      .then(res => res.json())
      .then(data => setCart(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="alert alert-info mt-4">Cargando carrito...</div>;
  if (!cart) return <div className="alert alert-danger mt-4">No se pudo cargar el carrito.</div>;

  return (
    <div className="mt-4">
      <h2>Carrito de compras (ejemplo API)</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.thumbnail} alt={item.title} width={40} style={{marginRight: 8}} />
                {item.title}
              </td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${cart.total.toFixed(2)}</h4>
        <h5 className="text-success">Total con descuento: ${cart.discountedTotal.toFixed(2)}</h5>
      </div>
    </div>
  );
}

export default Cart; 
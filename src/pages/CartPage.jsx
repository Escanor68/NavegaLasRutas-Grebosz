import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart.length) {
    return <div className="alert alert-info mt-4">El carrito está vacío.</div>;
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mt-4">
      <h2>Carrito de compras</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.thumbnail} alt={item.title} width={40} style={{marginRight: 8}} />
                {item.title}
              </td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  Quitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${total.toFixed(2)}</h4>
        <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}

export default CartPage; 
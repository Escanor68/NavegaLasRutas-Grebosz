import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { useCart } from './context/CartContext'
import './App.css'

const categoryTranslations = {
  smartphones: 'Celulares',
  laptops: 'Laptops',
  fragrances: 'Fragancias',
  skincare: 'Cuidado de la piel',
  groceries: 'Comestibles',
  "home-decoration": 'Decoración',
  furniture: 'Muebles',
  tops: 'Tops',
  "womens-dresses": 'Vestidos de mujer',
  "womens-shoes": 'Zapatos de mujer',
  "mens-shirts": 'Camisas de hombre',
  "mens-shoes": 'Zapatos de hombre',
  "mens-watches": 'Relojes de hombre',
  "womens-watches": 'Relojes de mujer',
  "womens-bags": 'Bolsos de mujer',
  "womens-jewellery": 'Joyería de mujer',
  sunglasses: 'Gafas de sol',
  automotive: 'Automotriz',
  motorcycle: 'Motocicletas',
  lighting: 'Iluminación',
};

function App() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const { cart } = useCart ? useCart() : { cart: [] };
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NavegaLasRutas</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              {loading ? (
                <li className="nav-item"><span className="nav-link">Cargando categorías...</span></li>
              ) : (
                categories.map(cat => (
                  <li className="nav-item" key={cat.slug}>
                    <Link className="nav-link" to={`/category/${encodeURIComponent(cat.slug)}`}>
                      {categoryTranslations[cat.slug] || cat.name || cat.slug}
                    </Link>
                  </li>
                ))
              )}
            </ul>
            <button className="btn btn-light position-relative" onClick={() => navigate('/cart')}>
              🛒 Carrito
              {cart && cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </>
  )
}

export default App

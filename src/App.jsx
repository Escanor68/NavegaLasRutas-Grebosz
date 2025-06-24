import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'

function App() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        {loading ? (
          <span style={{ marginLeft: 10 }}>Cargando categorías...</span>
        ) : (
          categories.map(cat => (
            <span key={cat} style={{ marginLeft: 10 }}>
              <Link to={`/category/${encodeURIComponent(cat)}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
            </span>
          ))
        )}
      </nav>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  )
}

export default App

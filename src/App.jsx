import { Routes, Route, Link } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/category/electronics">Electrónica</Link> |{' '}
        <Link to="/category/jewelery">Joyería</Link> |{' '}
        <Link to="/category/men's clothing">Ropa Hombre</Link> |{' '}
        <Link to="/category/women's clothing">Ropa Mujer</Link>
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

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import ItemDetail from '../components/products/ItemDetail';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { ArrowLeft, Home } from 'lucide-react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const loadProduct = async () => {
    if (!id) {
      setError('ID de producto no válido');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const productData = await fetchProductById(parseInt(id));
      setProduct(productData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar el producto');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  if (loading) {
    return <LoadingSpinner text="Cargando producto..." />;
  }

  if (error) {
    return (
      <div className="container py-5">
        <ErrorMessage message={error} onRetry={loadProduct} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <p className="text-muted fs-5 mb-4">
            Producto no encontrado
          </p>
          <Link
            to="/productos"
            className="btn btn-primary d-inline-flex align-items-center"
          >
            <Home size={16} className="me-2" />
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white border-bottom">
        <div className="container py-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-2">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">Inicio</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/productos" className="text-decoration-none">Productos</Link>
              </li>
              <li className="breadcrumb-item">
                <Link 
                  to={`/categoria/${product.category}`} 
                  className="text-decoration-none"
                >
                  {product.category}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product.title}
              </li>
            </ol>
          </nav>
          
          <Link
            to="/productos"
            className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center"
          >
            <ArrowLeft size={16} className="me-2" />
            Volver al catálogo
          </Link>
        </div>
      </div>

      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
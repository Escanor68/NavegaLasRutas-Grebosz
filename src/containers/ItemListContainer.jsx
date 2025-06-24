import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts, fetchProductsByCategory } from '../services/api';
import ItemList from '../components/products/ItemList';
import CategoryNav from '../components/layout/CategoryNav';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let productData;
      if (categoryId) {
        productData = await fetchProductsByCategory(categoryId);
      } else {
        productData = await fetchProducts();
      }
      
      setProducts(productData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [categoryId]);

  const getTitle = () => {
    if (categoryId) {
      return `Productos en ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`;
    }
    return 'Todos los productos';
  };

  const getDescription = () => {
    if (categoryId) {
      return `Explora nuestra selección de productos en la categoría ${categoryId}`;
    }
    return 'Descubre nuestra colección completa de productos';
  };

  return (
    <div>
      <CategoryNav />
      
      <div className="container py-5">
        <div className="mb-5">
          <h1 className="display-5 fw-bold text-dark mb-2">
            {getTitle()}
          </h1>
          <p className="text-muted fs-5">
            {getDescription()}
          </p>
          {!loading && (
            <p className="text-muted">
              {products.length} producto{products.length !== 1 ? 's' : ''} encontrado{products.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {loading && <LoadingSpinner text="Cargando productos..." />}
        
        {error && (
          <ErrorMessage 
            message={error} 
            onRetry={loadProducts}
          />
        )}
        
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted fs-5">
              No se encontraron productos en esta categoría.
            </p>
          </div>
        )}
        
        {!loading && !error && products.length > 0 && (
          <ItemList products={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
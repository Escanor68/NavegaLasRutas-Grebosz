import React from 'react';
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleAddToCart = (quantity) => {
    console.log(`Agregado ${quantity} del producto ${product.id} al carrito`);
    alert(`${quantity} producto(s) agregado(s) al carrito!`);
  };

  const stock = Math.floor(Math.random() * 20) + 5;

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="bg-white rounded-3 shadow-sm p-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-primary me-3">
                {product.category}
              </span>
              <div className="d-flex align-items-center">
                <Star size={16} className="text-warning me-1" fill="currentColor" />
                <small className="text-muted">
                  {product.rating.rate} ({product.rating.count} reseñas)
                </small>
              </div>
            </div>
            
            <h1 className="display-6 fw-bold text-dark mb-3">
              {product.title}
            </h1>
            
            <h2 className="display-4 fw-bold text-primary mb-4">
              {formatPrice(product.price)}
            </h2>
          </div>

          <div className="mb-4">
            <p className="text-muted">
              {product.description}
            </p>
          </div>

          <div className="border-top pt-4 mb-4">
            <ItemCount
              stock={stock}
              onAdd={handleAddToCart}
            />
          </div>

          <div className="row g-3 pt-4 border-top">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                  <Truck size={20} className="text-success" />
                </div>
                <div>
                  <h6 className="mb-0">Envío gratis</h6>
                  <small className="text-muted">En compras +$50</small>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-0">Garantía</h6>
                  <small className="text-muted">1 año de garantía</small>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="bg-warning bg-opacity-10 p-2 rounded me-3">
                  <RotateCcw size={20} className="text-warning" />
                </div>
                <div>
                  <h6 className="mb-0">Devoluciones</h6>
                  <small className="text-muted">30 días para devolver</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
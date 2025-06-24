import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye } from 'lucide-react';

const ItemList = ({ products }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card h-100 card-hover border-0 shadow-sm">
            <div className="position-relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top product-image"
              />
              <div className="position-absolute top-0 end-0 p-2">
                <Link
                  to={`/producto/${product.id}`}
                  className="btn btn-light btn-sm rounded-circle"
                >
                  <Eye size={16} />
                </Link>
              </div>
            </div>
            
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <Star size={16} className="text-warning me-1" fill="currentColor" />
                <small className="text-muted">
                  {product.rating.rate} ({product.rating.count})
                </small>
              </div>
              
              <h6 className="card-title line-clamp-2 mb-2">
                {product.title}
              </h6>
              
              <p className="card-text text-muted small line-clamp-2 mb-3">
                {product.description}
              </p>
              
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <h5 className="text-primary mb-0 fw-bold">
                  {formatPrice(product.price)}
                </h5>
                
                <Link
                  to={`/producto/${product.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
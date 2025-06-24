import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Truck, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <section className="hero-section text-white py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-4">
                Bienvenido a ModernStore
              </h1>
              <p className="lead mb-5">
                Descubre productos de calidad con los mejores precios y envío gratuito
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link
                  to="/productos"
                  className="btn btn-light btn-lg d-inline-flex align-items-center justify-content-center"
                >
                  <ShoppingBag size={20} className="me-2" />
                  Ver productos
                </Link>
                <Link
                  to="/categoria/electronics"
                  className="btn btn-outline-light btn-lg"
                >
                  Electrónicos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-3">
                ¿Por qué elegir ModernStore?
              </h2>
              <p className="lead text-muted">
                Ofrecemos la mejor experiencia de compra online
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <Truck size={32} className="text-primary" />
                </div>
                <h4 className="fw-bold mb-3">Envío Gratis</h4>
                <p className="text-muted">
                  Envío gratuito en todas las compras superiores a $50
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <Star size={32} className="text-success" />
                </div>
                <h4 className="fw-bold mb-3">Calidad Garantizada</h4>
                <p className="text-muted">
                  Productos verificados con garantía de calidad
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <Shield size={32} className="text-warning" />
                </div>
                <h4 className="fw-bold mb-3">Compra Segura</h4>
                <p className="text-muted">
                  Transacciones seguras y protección de datos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-3">
                ¿Listo para comenzar?
              </h2>
              <p className="lead text-muted mb-4">
                Explora nuestro catálogo completo de productos
              </p>
              <Link
                to="/productos"
                className="btn btn-primary btn-lg d-inline-flex align-items-center"
              >
                <ShoppingBag size={20} className="me-2" />
                Ver todos los productos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
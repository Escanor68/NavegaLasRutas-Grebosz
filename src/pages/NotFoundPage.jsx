import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="mb-5">
              <h1 className="display-1 fw-bold text-primary mb-4">404</h1>
              <h2 className="h3 fw-bold text-dark mb-3">
                Página no encontrada
              </h2>
              <p className="text-muted mb-4">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
            </div>
            
            <div className="d-grid gap-3 d-md-flex justify-content-md-center">
              <Link
                to="/"
                className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
              >
                <Home size={20} className="me-2" />
                Ir al inicio
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center"
              >
                <ArrowLeft size={20} className="me-2" />
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
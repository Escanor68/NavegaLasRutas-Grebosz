import React from 'react';

const LoadingSpinner = ({ size = 'md', text = 'Cargando...' }) => {
  const spinnerSize = size === 'sm' ? 'spinner-border-sm' : '';

  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <div className={`spinner-border text-primary mb-3 ${spinnerSize}`} role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p className="text-muted">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <AlertCircle size={48} className="text-danger mb-3" />
      <h5 className="text-dark mb-2">Algo salió mal</h5>
      <p className="text-muted text-center mb-4" style={{ maxWidth: '400px' }}>
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="btn btn-primary d-flex align-items-center"
        >
          <RefreshCw size={16} className="me-2" />
          Reintentar
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
import React from 'react';
import './resultcard.css';

const ResultCard = ({ title, value, unit, children }) => {
  return (
    <div className="result-card glass-card">
      <h3 className="result-card-title">{title}</h3>
      <div className="result-card-value">
        {value}
        {unit && <span className="result-unit">{unit}</span>}
      </div>
      {children && <div className="result-card-content">{children}</div>}
    </div>
  );
};

export default ResultCard;
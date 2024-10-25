import React from 'react';

const FinancialHealthCard = ({ healthData }) => {
  return (
    <div className="financial-health-card">
      <h3>Financial Health Score</h3>
      <p>Score: {healthData.score}</p>
      <p>Advice: {healthData.advice}</p>
    </div>
  );
};

export default FinancialHealthCard;

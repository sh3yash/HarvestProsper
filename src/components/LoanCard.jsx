import React from 'react';

const LoanCard = ({ loan }) => {
  return (
    <div className="loan-card">
      <h3>{loan.title}</h3>
      <p>Amount: {loan.amount}</p>
      <p>Status: {loan.status}</p>
    </div>
  );
};

export default LoanCard;

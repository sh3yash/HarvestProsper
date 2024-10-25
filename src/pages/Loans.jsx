import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Loans.css';

const Loans = () => {
  const location = useLocation();
  const loanInfo = location.state?.loanInfo;
  const [availableLoans, setAvailableLoans] = useState([]);

  useEffect(() => {
    if (loanInfo) {
      const loans = findAvailableLoans(loanInfo);
      setAvailableLoans(loans);
    }
  }, [loanInfo]);

  const handleApply = (loan) => {
    // Logic to apply for the loan can go here
    alert(`Applied for ${loan.name}`);
  };

  return (
    <div className="loans-container">
      <h2 className="loans-heading">Available Loans</h2>
      {loanInfo ? (
        <div className="loan-info">
          <h3>Loan Information</h3>
          <p><strong>Name:</strong> {loanInfo.name}</p>
          <p><strong>Land Size:</strong> {loanInfo.landSize} acres</p>
          <p><strong>Family Income:</strong> ₹{loanInfo.income}</p>
        </div>
      ) : (
        <p>No loan information available. Please go back and fill in the details.</p>
      )}

      {availableLoans.length > 0 ? (
        <ul className="loan-list">
          {availableLoans.map((loan, index) => (
            <li key={index} className="loan-item">
              <div className="loan-details">
                <h4>{loan.name}</h4>
                <p><strong>Interest Rate:</strong> {loan.interestRate}%</p>
                <p><strong>Max Amount:</strong> ₹{loan.maxAmount}</p>
                <p><strong>Tenure:</strong> {loan.tenure} years</p>
                <p><strong>Eligibility Criteria:</strong> {loan.criteria}</p>
              </div>
              <button className="apply-button" onClick={() => handleApply(loan)}>Click to Apply</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No loans available for the given information.</p>
      )}
    </div>
  );
};

// Function to find available loans based on user info
const findAvailableLoans = (loanInfo) => {
  if (!loanInfo) return [];

  const { landSize, income } = loanInfo;

  // Example loans data (this could be fetched from an API)
  const loansData = [
    { 
      name: 'Farm Development Loan', 
      interestRate: 5.0, 
      maxAmount: 500000, 
      tenure: 5, 
      criteria: 'Minimum land size: 2 acres, Minimum income: ₹300,000' 
    },
    { 
      name: 'Agricultural Equipment Loan', 
      interestRate: 6.5, 
      maxAmount: 200000, 
      tenure: 3, 
      criteria: 'Minimum land size: 1 acre, Minimum income: ₹150,000' 
    },
    { 
      name: 'Personal Agriculture Loan', 
      interestRate: 7.0, 
      maxAmount: 150000, 
      tenure: 2, 
      criteria: 'Minimum income: ₹200,000' 
    },
  ];

  // Filtering loans based on user input
  return loansData.filter((loan) => {
    const isLandSizeEligible = (loan.name === 'Farm Development Loan' && landSize >= 2) || 
                               (loan.name === 'Agricultural Equipment Loan' && landSize >= 1) ||
                               (loan.name === 'Personal Agriculture Loan');
    
    const isIncomeEligible = (income >= 300000 && loan.name === 'Farm Development Loan') ||
                             (income >= 150000 && loan.name === 'Agricultural Equipment Loan') ||
                             (income >= 200000 && loan.name === 'Personal Agriculture Loan');

    return isLandSizeEligible && isIncomeEligible;
  });
};

export default Loans;

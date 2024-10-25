import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Finance.css';

const Finance = () => {
  const location = useLocation();
  const financeInfo = location.state?.financeInfo;
  const [availablePlans, setAvailablePlans] = useState([]);

  useEffect(() => {
    if (financeInfo) {
      const plans = findAvailablePlans(financeInfo);
      setAvailablePlans(plans);
    }
  }, [financeInfo]);

  return (
    <div className="finance-container">
      <h2 className="finance-heading">Available Financial Plans</h2>
      {financeInfo ? (
        <div className="finance-info">
          <h3>Financial Information</h3>
          <p><strong>Annual Income:</strong> ₹{financeInfo.income}</p>
          <p><strong>Desired Loan Amount:</strong> ₹{financeInfo.desiredAmount}</p>
        </div>
      ) : (
        <p>No financial information available. Please go back and fill in the details.</p>
      )}

      {availablePlans.length > 0 ? (
        <ul className="finance-list">
          {availablePlans.map((plan, index) => (
            <li key={index} className="finance-item">
              <h4>{plan.name}</h4>
              <p><strong>Interest Rate:</strong> {plan.interestRate}%</p>
              <p><strong>Max Amount:</strong> ₹{plan.maxAmount}</p>
              <p><strong>Tenure:</strong> {plan.tenure} years</p>
              <p><strong>Eligibility Criteria:</strong> {plan.criteria}</p>
              <button className="apply-button">Apply Now</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No financial plans available for the given information.</p>
      )}
    </div>
  );
};

// Function to find available financial plans based on user info
const findAvailablePlans = (financeInfo) => {
  if (!financeInfo) return [];

  const { income, desiredAmount } = financeInfo;

  // Example plans data (this could be fetched from an API)
  const plansData = [
    { 
      name: 'Personal Finance Plan', 
      interestRate: 10.0, 
      maxAmount: 300000, 
      tenure: 3, 
      criteria: 'Minimum income: ₹300,000' 
    },
    { 
      name: 'Business Finance Plan', 
      interestRate: 8.5, 
      maxAmount: 500000, 
      tenure: 5, 
      criteria: 'Minimum income: ₹400,000' 
    },
    { 
      name: 'Home Improvement Finance', 
      interestRate: 9.0, 
      maxAmount: 250000, 
      tenure: 4, 
      criteria: 'Minimum income: ₹350,000' 
    },
  ];

  // Filtering plans based on user input
  return plansData.filter((plan) => {
    const isIncomeEligible = (income >= 300000 && plan.name === 'Personal Finance Plan') ||
                             (income >= 400000 && plan.name === 'Business Finance Plan') ||
                             (income >= 350000 && plan.name === 'Home Improvement Finance');

    const isAmountEligible = desiredAmount <= plan.maxAmount;

    return isIncomeEligible && isAmountEligible;
  });
};

export default Finance;

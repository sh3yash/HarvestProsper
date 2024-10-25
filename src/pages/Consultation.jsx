import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Consultation.css';

const Consultation = () => {
  const [loanInfo, setLoanInfo] = useState({
    name: '',
    landSize: '',
    income: '',
  });

  const [financeInfo, setFinanceInfo] = useState({
    name: '',
    farmType: '',
    income: '',
  });

  const [loanSubmitted, setLoanSubmitted] = useState(false);
  const [financeSubmitted, setFinanceSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleLoanChange = (e) => {
    const { name, value } = e.target;
    setLoanInfo({ ...loanInfo, [name]: value });
  };

  const handleFinanceChange = (e) => {
    const { name, value } = e.target;
    setFinanceInfo({ ...financeInfo, [name]: value });
  };

  const handleLoanSubmit = (e) => {
    e.preventDefault();
    setLoanSubmitted(true);
    // Navigate to Loans page or you can use Link below for better UX
    navigate('/loan', { state: { loanInfo } });
  };

  const handleFinanceSubmit = (e) => {
    e.preventDefault();
    setFinanceSubmitted(true);
    // Navigate to Finance page or you can use Link below for better UX
    navigate('/finances', { state: { financeInfo } });
  };

  return (
    <div className="consultation-container">
      <section className="credit-score-section">
        <h2>Factors of Credit Score Evaluation</h2>
        <div className="credit-factor-cards">
          <div className="credit-factor-card">
            <h3>Land Size and Ownership</h3>
            <p>The size and ownership of your land play a crucial role in determining your creditworthiness.</p>
          </div>
          <div className="credit-factor-card">
            <h3>Loan Payment History</h3>
            <p>Your history of loan repayments impacts your overall credit score significantly.</p>
          </div>
          <div className="credit-factor-card">
            <h3>Family Income</h3>
            <p>Stable family income ensures better repayment capacity, improving credit score.</p>
          </div>
        </div>
      </section>

      <div className="forms-container">
        <div className="form-card">
          <div className="form-section">
            <h2>Check for Loan</h2>
            <form className="loan-check-form" onSubmit={handleLoanSubmit}>
              <div className="form-item">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={loanInfo.name}
                  onChange={handleLoanChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="landSize">Land Size (in acres)</label>
                <input
                  type="number"
                  id="landSize"
                  name="landSize"
                  placeholder="Enter land size"
                  value={loanInfo.landSize}
                  onChange={handleLoanChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="income">Family Income</label>
                <input
                  type="number"
                  id="income"
                  name="income"
                  placeholder="Enter family income"
                  value={loanInfo.income}
                  onChange={handleLoanChange}
                  required
                />
              </div>
              <button type="submit" className="loan-submit-button">Check Available Loans</button>
            </form>
            {loanSubmitted && (
              <p>
                Loan application submitted! 
                <Link to="/loan"> Click here to check available loans.</Link>
              </p>
            )}
          </div>

          <div className="form-section">
            <h2>Check Finance Facilities</h2>
            <form className="finance-check-form" onSubmit={handleFinanceSubmit}>
              <div className="form-item">
                <label htmlFor="financeName">Your Name</label>
                <input
                  type="text"
                  id="financeName"
                  name="name"
                  placeholder="Enter your name"
                  value={financeInfo.name}
                  onChange={handleFinanceChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="farmType">Type of Farm</label>
                <input
                  type="text"
                  id="farmType"
                  name="farmType"
                  placeholder="e.g., Dairy, Crop, etc."
                  value={financeInfo.farmType}
                  onChange={handleFinanceChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="financeIncome">Family Income</label>
                <input
                  type="number"
                  id="financeIncome"
                  name="income"
                  placeholder="Enter family income"
                  value={financeInfo.income}
                  onChange={handleFinanceChange}
                  required
                />
              </div>
              <button type="submit" className="finance-submit-button">Check Finance Options</button>
            </form>
            {financeSubmitted && (
              <p>
                Finance application submitted! 
                <Link to="/finances"> Click here to check finance options.</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;

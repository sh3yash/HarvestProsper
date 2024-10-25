import React from 'react';
import './Consultation.css';

const Consultation = () => {
  return (
    <div className="consultation-page">
      {/* Factors of Credit Score Evaluation */}
      <section className="credit-score-factors">
        <h2>Factors of Credit Score Evaluation</h2>
        <div className="factor-cards">
          <div className="factor-card">
            <h3>Land Size and Ownership</h3>
            <p>The size and ownership of your land play a crucial role in determining your creditworthiness.</p>
          </div>
          <div className="factor-card">
            <h3>Loan Payment History</h3>
            <p>Your history of loan repayments impacts your overall credit score significantly.</p>
          </div>
          <div className="factor-card">
            <h3>Family Income</h3>
            <p>Stable family income ensures better repayment capacity, improving credit score.</p>
          </div>
        </div>
      </section>

      {/* Apply for a Loan Section */}
      <section className="apply-loan">
        <h2>Apply for a Loan</h2>
        <form className="loan-form">
          <div className="form-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input type="number" id="loanAmount" name="loanAmount" placeholder="Enter loan amount" required />
          </div>
          <div className="form-group">
            <label htmlFor="loanPurpose">Purpose of Loan</label>
            <input type="text" id="loanPurpose" name="loanPurpose" placeholder="e.g., Agricultural expansion" required />
          </div>
          <div className="form-group">
            <label htmlFor="landOwnership">Land Ownership Proof</label>
            <input type="file" id="landOwnership" name="landOwnership" required />
          </div>
          <div className="form-group">
            <label htmlFor="incomeProof">Income Proof</label>
            <input type="file" id="incomeProof" name="incomeProof" required />
          </div>
          <div className="form-group">
            <label htmlFor="loanDuration">Loan Duration (Years)</label>
            <input type="number" id="loanDuration" name="loanDuration" placeholder="Enter duration" required />
          </div>
          <button type="submit" className="submit-btn">Submit Loan Application</button>
        </form>
      </section>
    </div>
  );
};

export default Consultation;

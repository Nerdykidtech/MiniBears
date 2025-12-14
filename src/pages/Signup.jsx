import { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    program: '',
    numKids: 1,
    children: [],
    parent: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: 'TX',
      zip: ''
    },
    paymentMethod: '',
    agreeToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const shirtSizes = ['YXS', 'YS', 'YM', 'YL', 'YXL'];
  const pantsSizes = ['YXS', 'YS', 'YM', 'YL', 'YXL'];
  const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

  const totalSteps = 5;

  // Initialize children array when numKids changes
  const initializeChildren = (num) => {
    const children = [];
    for (let i = 0; i < num; i++) {
      children.push({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        grade: '',
        shirtSize: '',
        pantsSize: '',
        allergies: '',
        medicalConditions: ''
      });
    }
    setFormData(prev => ({ ...prev, numKids: num, children }));
  };

  const updateChild = (index, field, value) => {
    const newChildren = [...formData.children];
    newChildren[index] = { ...newChildren[index], [field]: value };
    setFormData(prev => ({ ...prev, children: newChildren }));
  };

  const updateParent = (field, value) => {
    setFormData(prev => ({
      ...prev,
      parent: { ...prev.parent, [field]: value }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Registration submitted:', formData);
    setSubmitted(true);
  };

  const getProgramFee = () => {
    if (formData.program === 'football') return 175;
    if (formData.program === 'cheer') return 150;
    return 0;
  };

  const getTotalFee = () => {
    return getProgramFee() * formData.numKids;
  };

  // Step 1: Program Selection
  const Step1 = () => (
    <div className="step-content">
      <h2>Select a Program</h2>
      <p className="step-description">Which program would you like to register for?</p>
      
      <div className="program-cards">
        <div 
          className={`program-option ${formData.program === 'cheer' ? 'selected' : ''}`}
          onClick={() => setFormData(prev => ({ ...prev, program: 'cheer' }))}
        >
          <span className="program-emoji">📣</span>
          <h3>Mini Cheer</h3>
          <p>Learn cheers, chants, and routines while building confidence!</p>
          <span className="program-price">$150 per child</span>
        </div>

        <div 
          className={`program-option ${formData.program === 'football' ? 'selected' : ''}`}
          onClick={() => setFormData(prev => ({ ...prev, program: 'football' }))}
        >
          <span className="program-emoji">🏈</span>
          <h3>Mini Football</h3>
          <p>Develop football skills, teamwork, and sportsmanship!</p>
          <span className="program-price">$175 per child</span>
        </div>
      </div>

      <div className="step-buttons">
        <button 
          className="btn btn-primary" 
          onClick={nextStep}
          disabled={!formData.program}
        >
          Continue
        </button>
      </div>
    </div>
  );

  // Step 2: Number of Kids
  const Step2 = () => (
    <div className="step-content">
      <h2>How Many Children?</h2>
      <p className="step-description">How many children are you registering for {formData.program === 'cheer' ? 'Cheer' : 'Football'}?</p>
      
      <div className="kids-selector">
        {[1, 2, 3, 4, 5].map(num => (
          <button
            key={num}
            className={`kids-btn ${formData.numKids === num ? 'selected' : ''}`}
            onClick={() => initializeChildren(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="kids-summary">
        <p>Registering <strong>{formData.numKids}</strong> {formData.numKids === 1 ? 'child' : 'children'}</p>
        <p className="fee-preview">Estimated Total: <strong>${getTotalFee()}</strong></p>
        {formData.numKids > 1 && (
          <p className="discount-note">* Sibling discounts may apply at checkout</p>
        )}
      </div>

      <div className="step-buttons">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep}>Continue</button>
      </div>
    </div>
  );

  // Step 3: Child and Parent Info
  const Step3 = () => (
    <div className="step-content">
      <h2>Registration Information</h2>
      <p className="step-description">Please provide information for each child and parent/guardian.</p>
      
      {/* Children Information */}
      {formData.children.map((child, index) => (
        <div key={index} className="child-form">
          <h3>Child {index + 1} Information</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                value={child.firstName}
                onChange={(e) => updateChild(index, 'firstName', e.target.value)}
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input
                type="text"
                value={child.lastName}
                onChange={(e) => updateChild(index, 'lastName', e.target.value)}
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                value={child.dateOfBirth}
                onChange={(e) => updateChild(index, 'dateOfBirth', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Grade *</label>
              <select
                value={child.grade}
                onChange={(e) => updateChild(index, 'grade', e.target.value)}
                required
              >
                <option value="">Select grade</option>
                {grades.map(g => (
                  <option key={g} value={g}>{g} Grade</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Shirt Size *</label>
              <select
                value={child.shirtSize}
                onChange={(e) => updateChild(index, 'shirtSize', e.target.value)}
                required
              >
                <option value="">Select size</option>
                {shirtSizes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Pants Size *</label>
              <select
                value={child.pantsSize}
                onChange={(e) => updateChild(index, 'pantsSize', e.target.value)}
                required
              >
                <option value="">Select size</option>
                {pantsSizes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Allergies (optional)</label>
            <input
              type="text"
              value={child.allergies}
              onChange={(e) => updateChild(index, 'allergies', e.target.value)}
              placeholder="List any allergies"
            />
          </div>

          <div className="form-group">
            <label>Medical Conditions (optional)</label>
            <input
              type="text"
              value={child.medicalConditions}
              onChange={(e) => updateChild(index, 'medicalConditions', e.target.value)}
              placeholder="List any medical conditions we should know about"
            />
          </div>
        </div>
      ))}

      {/* Parent Information */}
      <div className="parent-form">
        <h3>Parent/Guardian Information</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              value={formData.parent.firstName}
              onChange={(e) => updateParent('firstName', e.target.value)}
              placeholder="First name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              value={formData.parent.lastName}
              onChange={(e) => updateParent('lastName', e.target.value)}
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              value={formData.parent.email}
              onChange={(e) => updateParent('email', e.target.value)}
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              value={formData.parent.phone}
              onChange={(e) => updateParent('phone', e.target.value)}
              placeholder="(903) 555-1234"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Street Address *</label>
          <input
            type="text"
            value={formData.parent.address}
            onChange={(e) => updateParent('address', e.target.value)}
            placeholder="123 Main Street"
            required
          />
        </div>

        <div className="form-row form-row-3">
          <div className="form-group">
            <label>City *</label>
            <input
              type="text"
              value={formData.parent.city}
              onChange={(e) => updateParent('city', e.target.value)}
              placeholder="Gladewater"
              required
            />
          </div>
          <div className="form-group">
            <label>State *</label>
            <input
              type="text"
              value={formData.parent.state}
              onChange={(e) => updateParent('state', e.target.value)}
              placeholder="TX"
              required
            />
          </div>
          <div className="form-group">
            <label>ZIP Code *</label>
            <input
              type="text"
              value={formData.parent.zip}
              onChange={(e) => updateParent('zip', e.target.value)}
              placeholder="75647"
              required
            />
          </div>
        </div>
      </div>

      <div className="step-buttons">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={nextStep}>Continue to Payment</button>
      </div>
    </div>
  );

  // Step 4: Payment
  const Step4 = () => (
    <div className="step-content">
      <h2>Payment Method</h2>
      <p className="step-description">Select your preferred payment method.</p>
      
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>{formData.program === 'cheer' ? 'Mini Cheer' : 'Mini Football'} Registration</span>
          <span>${getProgramFee()} × {formData.numKids}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>${getTotalFee()}</span>
        </div>
      </div>

      <div className="payment-options">
        <div 
          className={`payment-option ${formData.paymentMethod === 'stripe' ? 'selected' : ''}`}
          onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'stripe' }))}
        >
          <span className="payment-icon">💳</span>
          <div>
            <h4>Credit/Debit Card</h4>
            <p>Pay securely with Stripe</p>
          </div>
        </div>

        <div 
          className={`payment-option ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}
          onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'paypal' }))}
        >
          <span className="payment-icon">🅿️</span>
          <div>
            <h4>PayPal</h4>
            <p>Pay with your PayPal account</p>
          </div>
        </div>

        <div 
          className={`payment-option ${formData.paymentMethod === 'cashapp' ? 'selected' : ''}`}
          onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cashapp' }))}
        >
          <span className="payment-icon">💵</span>
          <div>
            <h4>Cash App</h4>
            <p>Pay with Cash App</p>
          </div>
        </div>

        <div 
          className={`payment-option ${formData.paymentMethod === 'cash' ? 'selected' : ''}`}
          onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cash' }))}
        >
          <span className="payment-icon">💰</span>
          <div>
            <h4>Pay in Person</h4>
            <p>Pay cash at registration event</p>
          </div>
        </div>
      </div>

      {formData.paymentMethod && formData.paymentMethod !== 'cash' && (
        <div className="payment-note">
          <p>⚠️ You will be redirected to complete payment after submitting your registration.</p>
        </div>
      )}

      {formData.paymentMethod === 'cash' && (
        <div className="payment-note cash-note">
          <p>📍 Please bring exact payment to the next registration event at Gladewater Sports Complex.</p>
        </div>
      )}

      <div className="step-buttons">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button 
          className="btn btn-primary" 
          onClick={nextStep}
          disabled={!formData.paymentMethod}
        >
          Review Registration
        </button>
      </div>
    </div>
  );

  // Step 5: Review and Submit
  const Step5 = () => (
    <div className="step-content">
      <h2>Review & Submit</h2>
      <p className="step-description">Please review your registration details before submitting.</p>
      
      <div className="review-section">
        <h3>📋 Program</h3>
        <p>{formData.program === 'cheer' ? '📣 Mini Cheer' : '🏈 Mini Football'}</p>
      </div>

      <div className="review-section">
        <h3>👶 Children ({formData.numKids})</h3>
        {formData.children.map((child, index) => (
          <div key={index} className="review-child">
            <p><strong>{child.firstName} {child.lastName}</strong></p>
            <p>Grade: {child.grade} | DOB: {child.dateOfBirth}</p>
            <p>Shirt: {child.shirtSize} | Pants: {child.pantsSize}</p>
          </div>
        ))}
      </div>

      <div className="review-section">
        <h3>👤 Parent/Guardian</h3>
        <p><strong>{formData.parent.firstName} {formData.parent.lastName}</strong></p>
        <p>{formData.parent.email}</p>
        <p>{formData.parent.phone}</p>
        <p>{formData.parent.address}</p>
        <p>{formData.parent.city}, {formData.parent.state} {formData.parent.zip}</p>
      </div>

      <div className="review-section">
        <h3>💳 Payment</h3>
        <p>Method: {
          formData.paymentMethod === 'stripe' ? 'Credit/Debit Card' :
          formData.paymentMethod === 'paypal' ? 'PayPal' :
          formData.paymentMethod === 'cashapp' ? 'Cash App' :
          'Pay in Person'
        }</p>
        <p className="review-total">Total: <strong>${getTotalFee()}</strong></p>
      </div>

      <div className="terms-section">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
          />
          <span>I agree to the terms and conditions, waiver of liability, and photo/video release policy.</span>
        </label>
      </div>

      <div className="step-buttons">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button 
          className="btn btn-primary btn-submit" 
          onClick={handleSubmit}
          disabled={!formData.agreeToTerms}
        >
          Submit Registration
        </button>
      </div>
    </div>
  );

  // Success Screen
  const SuccessScreen = () => (
    <div className="success-screen">
      <span className="success-icon">🎉</span>
      <h2>Registration Complete!</h2>
      <p>Thank you for registering with the Gladewater Bears!</p>
      
      <div className="success-details">
        <p>A confirmation email has been sent to:</p>
        <p className="email-highlight">{formData.parent.email}</p>
      </div>

      {formData.paymentMethod !== 'cash' && (
        <div className="payment-redirect">
          <p>Click below to complete your payment:</p>
          <button className="btn btn-primary">
            Complete Payment - ${getTotalFee()}
          </button>
          <p className="payment-note-small">
            (This is a placeholder - payment integration would go here)
          </p>
        </div>
      )}

      {formData.paymentMethod === 'cash' && (
        <div className="cash-reminder">
          <p>📍 Remember to bring your payment of <strong>${getTotalFee()}</strong> to the next registration event.</p>
        </div>
      )}

      <div className="next-steps">
        <h3>What's Next?</h3>
        <ul>
          <li>✓ Check your email for confirmation</li>
          <li>✓ Save the practice schedule</li>
          <li>✓ Attend the parent orientation meeting</li>
          <li>✓ Pick up equipment at the first practice</li>
        </ul>
      </div>

      <p className="go-bears">Go Bears! 🐻</p>
    </div>
  );

  return (
    <div className="signup-page">
      {/* Hero Section */}
      <section className="page-hero signup-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="hero-icon">✍️</span>
          <h1>Sign Up</h1>
          <p>Join the Gladewater Bears family!</p>
        </div>
      </section>

      {/* Signup Section */}
      <section className="signup-section">
        <div className="container">
          {!submitted ? (
            <>
              {/* Progress Bar */}
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-steps">
                  {[1, 2, 3, 4, 5].map(step => (
                    <div 
                      key={step} 
                      className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}
                    >
                      <span className="step-number">{step}</span>
                      <span className="step-label">
                        {step === 1 && 'Program'}
                        {step === 2 && 'Kids'}
                        {step === 3 && 'Info'}
                        {step === 4 && 'Payment'}
                        {step === 5 && 'Submit'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Content */}
              <div className="signup-form-container">
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 />}
                {currentStep === 4 && <Step4 />}
                {currentStep === 5 && <Step5 />}
              </div>
            </>
          ) : (
            <div className="signup-form-container">
              <SuccessScreen />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Signup;

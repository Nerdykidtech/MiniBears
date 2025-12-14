import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="hero-icon">📞</span>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>Have a question? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {submitted && (
                <div className="success-message">
                  <span>✅</span> Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(903) 555-1234"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Question</option>
                    <option value="registration">Registration Help</option>
                    <option value="football">Football Program</option>
                    <option value="cheer">Cheer Program</option>
                    <option value="schedule">Schedule Question</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-box">
                <h3>📍 Location</h3>
                <p>Gladewater Sports Complex</p>
                <p>123 Bear Drive</p>
                <p>Gladewater, TX 75647</p>
              </div>

              <div className="info-box">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:info@gladewaterbears.com">info@gladewaterbears.com</a>
                </p>
                <p>
                  <a href="mailto:registration@gladewaterbears.com">registration@gladewaterbears.com</a>
                </p>
              </div>

              <div className="info-box">
                <h3>📞 Phone</h3>
                <p>
                  <a href="tel:+19035551234">(903) 555-BEAR (2327)</a>
                </p>
                <p className="office-hours">Office Hours: Mon-Fri 9AM-5PM</p>
              </div>

              <div className="info-box">
                <h3>🌐 Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <span>📘</span> Facebook
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <span>📷</span> Instagram
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <span>🐦</span> Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>When does registration open?</h4>
              <p>Registration typically opens in early August for the fall season. Check our website and social media for announcements.</p>
            </div>
            <div className="faq-item">
              <h4>What ages/grades are eligible?</h4>
              <p>Our Mini Cheer and Mini Football programs are open to children in grades 1st through 6th.</p>
            </div>
            <div className="faq-item">
              <h4>Is equipment provided?</h4>
              <p>Yes! All necessary equipment and uniforms are included in the registration fee.</p>
            </div>
            <div className="faq-item">
              <h4>Are there payment plans available?</h4>
              <p>Yes, we offer payment plans and sibling discounts. Contact us for more information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { Link } from 'react-router-dom';
import './Cheer.css';

const Cheer = () => {
  return (
    <div className="cheer-page">
      {/* Hero Section */}
      <section className="page-hero cheer-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="hero-icon">📣</span>
          <h1>Mini Cheer</h1>
          <p>Spirit, Energy, and Teamwork!</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>About Our Cheer Program</h2>
              <p>
                The Gladewater Bears Mini Cheer program is designed to introduce young athletes to the 
                exciting world of cheerleading. Our program focuses on building confidence, coordination, 
                and teamwork while having fun!
              </p>
              <p>
                Our cheerleaders perform at all home football games, supporting our Mini Football teams 
                and learning what it means to be part of the Bears family. We teach age-appropriate 
                cheers, chants, and basic motions in a safe and encouraging environment.
              </p>
              <Link to="/signup" className="btn btn-primary">Join Mini Cheer</Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>📣</span>
                <p>Cheerleader Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-icon">🎵</span>
              <h3>Cheers & Chants</h3>
              <p>Learn fun, age-appropriate cheers and chants to support our football teams.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">💃</span>
              <h3>Motions & Movements</h3>
              <p>Master basic cheerleading motions, jumps, and coordination skills.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">🤸</span>
              <h3>Basic Tumbling</h3>
              <p>Introduction to safe, beginner-level tumbling and flexibility.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">🤝</span>
              <h3>Teamwork</h3>
              <p>Work together as a squad and learn the value of supporting each other.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="details-section">
        <div className="container">
          <h2 className="section-title">Program Details</h2>
          <div className="details-grid">
            <div className="detail-card">
              <h3>📅 Practice Schedule</h3>
              <ul>
                <li>Tuesday & Thursday</li>
                <li>5:30 PM - 7:00 PM</li>
                <li>Gladewater Sports Complex</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>👕 What's Included</h3>
              <ul>
                <li>Official Bears Cheer Uniform</li>
                <li>Pom Poms</li>
                <li>Practice Wear</li>
                <li>Hair Bow</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>📋 Requirements</h3>
              <ul>
                <li>Grades 1st - 6th</li>
                <li>No experience needed</li>
                <li>Positive attitude</li>
                <li>Ready to have fun!</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>💰 Registration Fee</h3>
              <ul>
                <li>$150 per season</li>
                <li>Includes all equipment</li>
                <li>Payment plans available</li>
                <li>Sibling discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="container">
          <h2>Ready to Join the Squad?</h2>
          <p>Become a Gladewater Bears Cheerleader today!</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn btn-primary">Register Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cheer;

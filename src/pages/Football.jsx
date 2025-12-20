import { Link } from 'react-router-dom';
import './Football.css';

const Football = () => {
  return (
    <div className="football-page">
      {/* Hero Section */}
      <section className="page-hero football-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="hero-icon">🏈</span>
          <h1>Youth Football</h1>
          <p>Strength, Teamwork, and Victory!</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>About Our Football Program</h2>
              <p>
                The Gladewater Bears Youth Football program is where future gridiron stars are made! 
                Our program focuses on teaching fundamental football skills, sportsmanship, and 
                teamwork in a fun and safe environment.
              </p>
              <p>
                Every player gets playing time, and our experienced coaches work with each child 
                to develop their skills regardless of their experience level. We believe in building 
                character and confidence both on and off the field.
              </p>
              <Link to="/signup" className="btn btn-primary">Join Youth Football</Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🏈</span>
                <p>Football Action Photo</p>
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
              <span className="skill-icon">🎯</span>
              <h3>Fundamentals</h3>
              <p>Learn proper tackling, blocking, throwing, and catching techniques.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">📋</span>
              <h3>Plays & Strategy</h3>
              <p>Understand basic offensive and defensive plays and football strategy.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">💪</span>
              <h3>Conditioning</h3>
              <p>Build strength, speed, and endurance through age-appropriate training.</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">🏆</span>
              <h3>Sportsmanship</h3>
              <p>Learn to win with grace and lose with dignity - always a Bear!</p>
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
                <li>Monday, Wednesday, Friday</li>
                <li>5:30 PM - 7:30 PM</li>
                <li>Gladewater Sports Complex</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>🏈 What's Included</h3>
              <ul>
                <li>Full Football Equipment</li>
                <li>Official Bears Jersey</li>
                <li>Football Pants</li>
                <li>Practice Gear</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>📋 Requirements</h3>
              <ul>
                <li>Grades 1st - 6th</li>
                <li>No experience needed</li>
                <li>Physical exam required</li>
                <li>Ready to work hard!</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>💰 Registration Fee</h3>
              <ul>
                <li>$175 per season</li>
                <li>Includes all equipment</li>
                <li>Payment plans available</li>
                <li>Sibling discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Game Day Section */}
      <section className="gameday-section">
        <div className="container">
          <h2 className="section-title">Game Days</h2>
          <div className="gameday-content">
            <div className="gameday-info">
              <h3>🗓️ Saturday Game Days</h3>
              <p>Games are held every Saturday during the season. Times vary by grade level.</p>
              <ul>
                <li>Home games at Gladewater Sports Complex</li>
                <li>Away games throughout East Texas</li>
                <li>4-6 games per season</li>
                <li>End of season playoffs</li>
              </ul>
              <Link to="/schedule" className="btn btn-outline">View Full Schedule</Link>
            </div>
            <div className="gameday-grades">
              <h3>Grade Divisions</h3>
              <div className="grade-list">
                <div className="grade-item">
                  <span>1st Grade</span>
                  <span>Flag Football</span>
                </div>
                <div className="grade-item">
                  <span>2nd Grade</span>
                  <span>Flag Football</span>
                </div>
                <div className="grade-item">
                  <span>3rd Grade</span>
                  <span>Tackle Football</span>
                </div>
                <div className="grade-item">
                  <span>4th Grade</span>
                  <span>Tackle Football</span>
                </div>
                <div className="grade-item">
                  <span>5th Grade</span>
                  <span>Tackle Football</span>
                </div>
                <div className="grade-item">
                  <span>6th Grade</span>
                  <span>Tackle Football</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="container">
          <h2>Ready to Hit the Field?</h2>
          <p>Join the Gladewater Bears Football team today!</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn btn-primary">Register Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Football;

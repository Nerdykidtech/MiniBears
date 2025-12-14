import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.espncdn.com%2Fcombiner%2Fi%3Fimg%3D%2Fi%2Fteamlogos%2Fnfl%2F500%2Fchi.png&f=1&nofb=1&ipt=2fd059d084b4792411152de8fc146dd9bda880344675d988fea2152c90698191" 
            alt="Gladewater Bears" 
            className="hero-logo"
          />
          <h1>Gladewater Bears</h1>
          <h2>Mini Cheer & Mini Football</h2>
          <p>Building character, teamwork, and champions!</p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
            <Link to="/schedule" className="btn btn-secondary">View Schedule</Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">Join the Gladewater Bears family! We offer programs for grades 1st through 6th.</p>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">📣</div>
              <h3>Mini Cheer</h3>
              <p>Learn cheers, chants, and routines while building confidence and school spirit. Our cheerleaders support our football teams at every game!</p>
              <ul>
                <li>✓ Professional coaching</li>
                <li>✓ Uniforms provided</li>
                <li>✓ Performance at games</li>
                <li>✓ Grades 1st - 6th</li>
              </ul>
              <Link to="/cheer" className="btn btn-outline">Learn More</Link>
            </div>

            <div className="program-card">
              <div className="program-icon">🏈</div>
              <h3>Mini Football</h3>
              <p>Develop fundamental football skills, teamwork, and sportsmanship in a fun and safe environment. Every player gets playing time!</p>
              <ul>
                <li>✓ Experienced coaches</li>
                <li>✓ Equipment provided</li>
                <li>✓ Weekly games</li>
                <li>✓ Grades 1st - 6th</li>
              </ul>
              <Link to="/football" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join">
        <div className="container">
          <h2 className="section-title">Why Join the Bears?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">🏆</span>
              <h4>Build Character</h4>
              <p>Learn valuable life lessons about hard work, dedication, and perseverance.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🤝</span>
              <h4>Teamwork</h4>
              <p>Work together with teammates to achieve common goals and build lasting friendships.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">💪</span>
              <h4>Stay Active</h4>
              <p>Get exercise and develop physical skills in a fun, supportive environment.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">⭐</span>
              <h4>Have Fun</h4>
              <p>Most importantly, have a blast while learning new skills and making memories!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Join the Bears Family?</h2>
          <p>Registration is now open for the upcoming season. Don't miss out!</p>
          <Link to="/signup" className="btn btn-primary btn-large">Register Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img 
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.espncdn.com%2Fcombiner%2Fi%3Fimg%3D%2Fi%2Fteamlogos%2Fnfl%2F500%2Fchi.png&f=1&nofb=1&ipt=2fd059d084b4792411152de8fc146dd9bda880344675d988fea2152c90698191" 
              alt="Gladewater Bears" 
            />
            <h3>Gladewater Bears</h3>
          </div>
          <p>Mini Cheer & Mini Football</p>
          <p>Building champions on and off the field!</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cheer">Cheer</Link></li>
            <li><Link to="/football">Football</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Gladewater, TX</p>
          <p>📧 info@gladewaterbears.com</p>
          <p>📞 (903) 555-BEAR</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gladewater Bears Little League. All rights reserved.</p>
        <p>Go Bears! 🐻</p>
      </div>
    </footer>
  );
};

export default Footer;

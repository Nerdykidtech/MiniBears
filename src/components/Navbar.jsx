import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-bear">🐻</span>
          <div className="logo-text-group">
            <span className="logo-glade">GLADEWATER </span><span className="logo-water">‎ BEARS</span>
          </div>
        </Link>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/cheer" 
              className={`nav-link ${isActive('/cheer') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Cheer
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/football" 
              className={`nav-link ${isActive('/football') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Football
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/schedule" 
              className={`nav-link ${isActive('/schedule') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/signup" 
              className="nav-link signup-btn"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

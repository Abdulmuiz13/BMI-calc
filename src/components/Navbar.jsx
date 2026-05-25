import React, {useState} from 'react';
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar glass-panel-nav">
      <div className="nav-container">
        <div className="nav-logo">
            <a href="#home" onClick={() => setIsOpen(false)}>
                <span className="logo-icon">⚡</span> 
                <span className="logo-text">BMI Calculator</span>
            </a>
        </div>
        
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#calculator" onClick={() => setIsOpen(false)}>Calculator</a></li>
          <li><a href="#tips" onClick={() => setIsOpen(false)}>Health Tips</a></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
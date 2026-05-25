import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BMI Health Tracker</h3>
          <p>Your partner in achieving optimal health through data-driven insights.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#calculator">Calculator</a></li>
            <li><a href="#tips">Health Tips</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#">📱</a>
            <a href="#">🐦</a>
            <a href="#">📧</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 BMI Health Tracker. Not a medical device. Consult your doctor.</p>
      </div>
    </footer>
  );
};

export default Footer;
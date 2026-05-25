import React from 'react';
import './Hero.css';

const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorForm = document.querySelector('.calculator-form-card');
    if (calculatorForm) {
      calculatorForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">BMI Calculator</span>
          <br />+ Health Tips
        </h1>
        <p className="hero-description">
          Discover your body mass index, daily calorie needs, and get personalized health recommendations
          to achieve your wellness goals.
        </p>
        <button className="cta-button" onClick={scrollToCalculator}>
          Start Your Journey
          <span className="button-arrow">→</span>
        </button>
      </div>
      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-number">BMI</div>
          <div className="stat-label">Body Mass Index</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">BMR</div>
          <div className="stat-label">Calories at Rest</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">Daily</div>
          <div className="stat-label">Calorie Needs</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
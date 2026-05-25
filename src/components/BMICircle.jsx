import React from 'react';
import './bmiCircle.css';

const BMICircle = ({ bmi, category }) => {
  const percentage = Math.min(100, (bmi / 40) * 100);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  let color = '#00d4ff';
  if (category === 'Underweight') color = '#00d4ff';
  else if (category === 'Normal') color = '#00ff88';
  else if (category === 'Overweight') color = '#ffaa00';
  else color = '#ff4466';

  return (
    <div className="bmi-circle-container">
      <svg className="bmi-circle" viewBox="0 0 120 120">
        <circle
          className="bg-circle"
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
        />
        <circle
          className="progress-circle"
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
          strokeLinecap="round"
        />
        <text x="60" y="55" textAnchor="middle" className="bmi-value-text">{bmi}</text>
        <text x="60" y="72" textAnchor="middle" className="bmi-label-text">BMI</text>
      </svg>
    </div>
  );
};

export default BMICircle;
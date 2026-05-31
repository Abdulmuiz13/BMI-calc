import React, { useEffect, useState } from 'react';
import ResultCard from './ResultCard';
import BMICircle from './BMICircle';
import './result.css';

const ResultsSection = ({ results }) => {
  const { bmi, bmr, dailyCalories, category, name, weight, height, age, gender } = results;
  const [countedBMI, setCountedBMI] = useState(0);
  const [countedBMR, setCountedBMR] = useState(0);
  const [countedCalories, setCountedCalories] = useState(0);
  
  useEffect(() => {
    let startTime;
    const duration = 1000;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(1, (timestamp - startTime) / duration);
      setCountedBMI(progress * parseFloat(bmi));
      setCountedBMR(progress * bmr);
      setCountedCalories(progress * dailyCalories);
      if (progress < 1) requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [bmi, bmr, dailyCalories]);

  const getCategoryColor = () => {
    switch(category) {
      case 'Underweight': return '#00d4ff';
      case 'Normal': return '#00ff88';
      case 'Overweight': return '#ffaa00';
      case 'Obese': return '#ff4466';
      default: return '#00d4ff';
    }
  };

  const getWaterIntake = () => {
    const baseWater = weight * 0.033;
    if (category === 'Underweight') return (baseWater + 0.3).toFixed(1);
    if (category === 'Overweight') return (baseWater + 0.5).toFixed(1);
    if (category === 'Obese') return (baseWater + 0.7).toFixed(1);
    return baseWater.toFixed(1);
  };

  const getBmiPercentage = () => {
    const bmiValue = parseFloat(bmi) || 0;
    return Math.min(100, Math.max(0, (bmiValue / 40) * 100));
  };

  return (
    <div className="results-section" id="results">
      <h2 className="results-title">Your Health Report</h2>
      {name && <p className="greeting">Hello, {name}! Here's your personalized health analysis:</p>}
      
      <div className="results-grid">
        <ResultCard title="BMI Score" value={countedBMI.toFixed(1)} unit="">
          <BMICircle bmi={parseFloat(bmi)} category={category} />
        </ResultCard>
        
        <ResultCard title="BMI Category" value={category} unit="">
          <div className="category-badge" style={{ backgroundColor: getCategoryColor() }}>
            {category}
          </div>
          <div className="bmi-range">
            <div className="range-labels">
              <span className="underweight">Underweight</span>
              <span className="normal">Normal</span>
              <span className="overweight">Overweight</span>
              <span className="obese">Obese</span>
            </div>
            <div className="range-bar">
              <div className="range-segments">
                <span className="segment underweight"></span>
                <span className="segment normal"></span>
                <span className="segment overweight"></span>
                <span className="segment obese"></span>
              </div>
              <div className="range-indicator" style={{ left: `${getBmiPercentage()}%` }}></div>
            </div>
          </div>
        </ResultCard>
        
        <ResultCard title="Basal Metabolic Rate" value={Math.round(countedBMR)} unit="calories/day">
          <p className="result-note">Calories burned at complete rest</p>
        </ResultCard>
        
        <ResultCard title="Daily Calorie Needs" value={Math.round(countedCalories)} unit="calories/day">
          <p className="result-note">To maintain current weight</p>
        </ResultCard>
        
        <ResultCard title="💧 Water Intake" value={getWaterIntake()} unit="liters/day">
          <p className="result-note">Recommended daily hydration</p>
        </ResultCard>
      </div>
      
      <div className="health-summary">
        <h3>Health Summary for {gender === 'male' ? 'Man' : 'Woman'}, {age} years</h3>
        <p>Height: {height} cm | Weight: {weight} kg</p>
      </div>
    </div>
  );
};

export default ResultsSection;
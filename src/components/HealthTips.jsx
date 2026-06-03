// components/HealthTips.js
import React, { useState, useEffect } from 'react';
import './healthtips.css'

const HealthTips = ({ bmiCategory, weight }) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  
  const tipsByCategory = {
    Underweight: [
      { title: "Increase Caloric Intake", description: "Add healthy calories through nuts, avocados, and whole grains.", icon: "🥑" },
      { title: "Protein-Rich Diet", description: "Include lean meats, eggs, and legumes to build muscle mass.", icon: "🍗" },
      { title: "Frequent Meals", description: "Eat 5-6 small meals throughout the day instead of 3 large ones.", icon: "🍽️" },
      { title: "Strength Training", description: "Focus on resistance exercises to build healthy muscle weight.", icon: "🏋️" }
    ],
    Normal: [
      { title: "Balanced Diet", description: "Maintain a mix of proteins, carbs, and healthy fats in each meal.", icon: "⚖️" },
      { title: "Regular Exercise", description: "Aim for 150 minutes of moderate activity weekly.", icon: "🏃" },
      { title: "Hydration", description: "Drink 2-3 liters of water daily for optimal metabolism.", icon: "💧" },
      { title: "Sleep Quality", description: "Get 7-9 hours of sleep for hormone balance.", icon: "😴" }
    ],
    Overweight: [
      { title: "Reduce Sugar Intake", description: "Cut added sugars from sodas, desserts, and processed foods.", icon: "🍬" },
      { title: "Portion Control", description: "Use smaller plates and measure your portions.", icon: "🍽️" },
      { title: "Increase Fiber", description: "Add vegetables and whole grains to feel fuller longer.", icon: "🥦" },
      { title: "Cardio Workouts", description: "Start with brisk walking 30 minutes daily.", icon: "🚶" }
    ],
    Obese: [
      { title: "Increase Physical Activity", description: "Start with low-impact exercises like swimming or cycling.", icon: "🏊" },
      { title: "Consult a Professional", description: "Work with a dietitian and doctor for a personalized plan.", icon: "👨‍⚕️" },
      { title: "Mindful Eating", description: "Eat slowly and listen to your body's hunger cues.", icon: "🧘" },
      { title: "Set Realistic Goals", description: "Aim to lose 0.5-1 kg per week for sustainable results.", icon: "🎯" }
    ]
  };

  const tips = tipsByCategory[bmiCategory] || tipsByCategory.Normal;

  useEffect(() => {
    setCurrentTipIndex(0);
  }, [bmiCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [tips.length]);

  const prevTip = () => {
    setCurrentTipIndex((prev) => (prev - 1 + tips.length) % tips.length);
  };

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % tips.length);
  };

  const getRecommendation = () => {
    if (bmiCategory === 'Underweight') return { color: '#00d4ff', action: 'Gain Weight Healthily' };
    if (bmiCategory === 'Normal') return { color: '#00ff88', action: 'Maintain Wellness' };
    if (bmiCategory === 'Overweight') return { color: '#ffaa00', action: 'Lose Weight Gradually' };
    return { color: '#ff4466', action: 'Take Action Today' };
  };

  const rec = getRecommendation();

  return (
    <div className="health-tips-section" id="tips">
      <div className="tips-header">
        <h2>Personalized Health Tips</h2>
        <div className="category-indicator" style={{ backgroundColor: rec.color }}>
          {rec.action}
        </div>
      </div>
      
      <div className="tips-carousel">
        <button className="carousel-arrow prev-arrow" onClick={prevTip} aria-label="Previous tip">
          ‹
        </button>

        <div className="tip-card glass-card" key={currentTipIndex}>
          <div className="tip-icon">{tips[currentTipIndex].icon}</div>
          <h3>{tips[currentTipIndex].title}</h3>
          <p>{tips[currentTipIndex].description}</p>
        </div>

        <button className="carousel-arrow next-arrow" onClick={nextTip} aria-label="Next tip">
          ›
        </button>
      </div>
      
      <div className="tips-dots">
        {tips.map((_, idx) => (
          <button
            key={idx}
            className={`tip-dot ${idx === currentTipIndex ? 'active' : ''}`}
            onClick={() => setCurrentTipIndex(idx)}
            style={{ backgroundColor: idx === currentTipIndex ? rec.color : '' }}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
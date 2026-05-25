import React, { useState } from 'react';
import HeroSection from '../components/Hero';
import HealthTips from '../components/HealthTips';
import Navbar from '../components/Navbar';
import CalculatorForm from '../components/CalculatorForm';
import ResultsSection from '../components/ResultsSection';
import Footer from '../components/Footer';
import './Home.css';

const HomePage = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bmiCategory, setBmiCategory] = useState('');


  const calculateResults = (formData) => {
    setLoading(true);
    setTimeout(() => {
      const { weight, height, age, gender, activityLevel, name } = formData;
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi >= 18.5 && bmi < 25) category = 'Normal';
      else if (bmi >= 25 && bmi < 30) category = 'Overweight';
      else category = 'Obese';

      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      bmr = Math.round(bmr);

      const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
      };
      const dailyCalories = Math.round(bmr * activityMultipliers[activityLevel]);

      setResults({ bmi, bmr, dailyCalories, category, name, weight, height, age, gender });
      setBmiCategory(category);
      setLoading(false);
    }, 800);
  };

  const resetCalculator = () => {
    setResults(null);
    setBmiCategory('');
  };

  return (
    <div className="homepage">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <div className="calculator-wrapper">
          <CalculatorForm onCalculate={calculateResults} onReset={resetCalculator} loading={loading} />
          {loading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Calculating your health metrics...</p>
            </div>
          )}
          {results && !loading && (
            <>
              <ResultsSection results={results} />
              <HealthTips bmiCategory={bmiCategory} weight={results.weight} /> 
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
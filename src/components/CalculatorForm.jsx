import React, { useState } from 'react';
import './calculator.css'

const CalculatorForm = ({ onCalculate, onReset, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'female',
    weight: '',
    height: '',
    activityLevel: 'moderate'
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.age && (formData.age < 15 || formData.age > 120)) newErrors.age = 'Age must be 15-120';
    if (formData.weight && (formData.weight < 20 || formData.weight > 300)) newErrors.weight = 'Weight must be 20-300 kg';
    if (formData.height && (formData.height < 100 || formData.height > 250)) newErrors.height = 'Height must be 100-250 cm';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.height) newErrors.height = 'Height is required';
    return newErrors;
  };


   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onCalculate(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      gender: 'female',
      weight: '',
      height: '',
      activityLevel: 'moderate'
    });
    setErrors({});
    onReset();
  };

  return (
    <div className="calculator-form-card glass-card" id="calculator">
      <h2 className="form-title">Calculate Your Metrics</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name (Optional)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Age <span className="required">*</span></label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Years"
              className={`form-input ${errors.age ? 'error' : ''}`}
            />
            {errors.age && <span className="error-text">{errors.age}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-buttons">
              <button
                type="button"
                className={`gender-btn ${formData.gender === 'female' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, gender: 'female' })}
              >
                👩 Female
              </button>
              <button
                type="button"
                className={`gender-btn ${formData.gender === 'male' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, gender: 'male' })}
              >
                👨 Male
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Activity Level</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="form-select"
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light Exercise (1-3 days/week)</option>
              <option value="moderate">Moderate Exercise (3-5 days/week)</option>
              <option value="active">Active (6-7 days/week)</option>
              <option value="veryActive">Very Active (athlete/physical job)</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Weight (kg) <span className="required">*</span></label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="kg"
              step="0.1"
              className={`form-input ${errors.weight ? 'error' : ''}`}
            />
            {errors.weight && <span className="error-text">{errors.weight}</span>}
          </div>
          <div className="form-group">
            <label>Height (cm) <span className="required">*</span></label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="cm"
              className={`form-input ${errors.height ? 'error' : ''}`}
            />
            {errors.height && <span className="error-text">{errors.height}</span>}
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Calculating...' : 'Calculate Now'}
          </button>
          <button type="button" className="btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;

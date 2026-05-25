import React, { useState } from 'react';
import HomePage from './pages/Home';
import "./styles/global.css";

function  App() {
  return (
    <div className="App">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <HomePage />
    </div>
  );
}

export default App;

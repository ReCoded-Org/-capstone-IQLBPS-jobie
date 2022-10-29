import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import './App.css';
import HowItWorks from './components/About/HowItWorks/HowItWorks';


function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks/>
    </div>
  );
}

export default App;

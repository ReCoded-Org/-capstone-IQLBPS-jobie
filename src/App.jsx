import React from 'react';

// import { Routes, Route } from "react-router-dom";

import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import Login from './components/Login/Login';
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

function App() {
  return (
    <div className="App">
      <Hero />
      <Login />
      <WyChooseUs />
      <Experience />
      <Education />
    </div>
  );
}

export default App;

import React from 'react';

// import { Routes, Route } from "react-router-dom";

import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import Login from './components/Login/Login';
import SignUp from './components/signup/SignUp';
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

function App() {
  return (
    <div className="App">
      <Hero />
      <Login />
      <SignUp />
      <WyChooseUs />
      <Experience />
      <Education />
    </div>
  );
}

export default App;

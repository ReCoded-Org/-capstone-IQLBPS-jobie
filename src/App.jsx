import React from 'react';



// import { Routes, Route } from "react-router-dom";

import Hero from './components/Hero/Hero';
import NameAndLinks from "./components/NameAndLinks/NameAndLinks";
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

function App() {
  return (
    <div className="App">
      <Hero />
      <NameAndLinks />
      <WyChooseUs />
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;

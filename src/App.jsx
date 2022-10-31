import React from 'react';
import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import HowItWorks from './components/About/HowItWorks/HowItWorks';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

function App() {
  return (
    <div className="App">
      <Hero />
      <WyChooseUs />
      <HowItWorks/>
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;
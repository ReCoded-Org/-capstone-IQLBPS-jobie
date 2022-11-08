import React from 'react';

import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';
import AboutHero from './components/aboutHero/AboutHero';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutHero />
      <WyChooseUs />
      <Experience />
      <Education />
    </div>
  );
}

export default App;

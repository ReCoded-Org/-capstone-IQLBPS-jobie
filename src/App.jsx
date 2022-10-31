import React from 'react';
import AboutUsComponent from './Components/AboutUsComponent';
import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

function App() {
  return (
    <div className="App">
      <Hero />
      <WyChooseUs />
      <AboutUsComponent />
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;

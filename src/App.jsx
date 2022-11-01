import React from 'react';
import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';

import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

import GetInTouchForm from './components/gitInTouchForm/GetInTouchForm';

function App() {
  return (
    <div className="App">
      <Hero />
      <WyChooseUs />
       <GetInTouchForm/>
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;

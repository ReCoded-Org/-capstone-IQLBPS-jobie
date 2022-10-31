import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero/Hero';
import Localize from './Localize';
import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';


function App() {
  const {t} = useTranslation();
  return (
    <div className="App">
      <Hero />
      <h1>{t('hello')}</h1>
      <Localize />
      <WyChooseUs />
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;

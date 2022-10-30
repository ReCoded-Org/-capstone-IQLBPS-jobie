import React from 'react';
// import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero/Hero';
import Footer from './Footer';
import './App.css';


function App() {
  const {t} = useTranslation;
  return (
    <div className="App">
      <Hero />
      <h1>{t('hello')}</h1>
      <Footer />
    </div>
  );
}

export default App;

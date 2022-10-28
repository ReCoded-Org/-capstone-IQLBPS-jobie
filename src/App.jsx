import React from 'react';
// import { Routes, Route } from "react-router-dom";

import Hero from './components/Hero/Hero';
import './App.css';
import Showcase from './components/companyShowcaseComponent/CompanyShowcaseComponent';

function App() {
  return (
    <div className="App">
      <Hero />
     <Showcase/>
    </div>
  );
}

export default App;

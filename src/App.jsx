import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import './App.css';
import JobsShowcase from './components/JobsShowcase/JobsShowcase';
import { showcaseData } from './data';

function App() {
  return (
    <div className="App">
      <Hero />
      <JobsShowcase showcaseArray={showcaseData} />
    </div>
  );
}

export default App;

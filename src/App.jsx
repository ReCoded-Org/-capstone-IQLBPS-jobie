import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import './App.css';
import JobsFinder from './components/Hero/JobsFinder';

function App() {
  return (
    <div className="App">
      <Hero />
      <JobsFinder/>
    </div>
  );
}

export default App;

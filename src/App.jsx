import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import './App.css';
import SaveButton from './components/SaveButton';

function App() {
  return (
    <div className="App">
      <Hero />
      <SaveButton/>
    </div>
  );
}

export default App;

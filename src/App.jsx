import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import NameAndLinks from "./components/NameAndLinks/NameAndLinks";
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <NameAndLinks />
    </div>
  );
}

export default App;

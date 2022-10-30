import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import './App.css';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Hero />
      <Categories/>
    
    </div>
  );
}

export default App;

import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import './App.css';
 import Contact  from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <h1>Hello</h1>
      <Contact/>
    </div>
  );
}

export default App;

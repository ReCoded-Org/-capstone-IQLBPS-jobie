import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import './App.css';
import ContactSkills from './components/ProfileEdit/contact_skills_page';

function App() {
  return (
    <div className="App">
      <Hero />
<ContactSkills/>
    </div>
  );
}

export default App;

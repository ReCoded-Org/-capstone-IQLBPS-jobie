import React from 'react';



// import { Routes, Route } from "react-router-dom";

import Hero from './components/Hero/Hero';
import MeetOurTeam from './components/MeetOurTeam/MeetOurTeam';
import {teamMembers} from "./data/teamData";
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';




function App() {
  return (
    <div className="App">
      <Hero />
      <WyChooseUs />
      <Experience/>
      <Education/>
      <MeetOurTeam teamMembers={teamMembers}/>
    </div>
  );
}

export default App;

import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import MeetOurTeam from './components/MeetOurTeam/MeetOurTeam';
import {teamMembers} from "./data/teamData";
import './App.css';


function App() {
  return (
    <div className="App">
      <Hero />
      <MeetOurTeam teamMembers={teamMembers}/>
    </div>
  );
}

export default App;

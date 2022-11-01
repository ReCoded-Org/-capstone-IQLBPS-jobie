import React from 'react';
<<<<<<< HEAD
// import { Routes, Route } from "react-router-dom";
=======
>>>>>>> 6459caba160cd823fad5bcd6340c123014d8badb
import Hero from './components/Hero/Hero';

import MeetOurTeam from './components/MeetOurTeam/MeetOurTeam';
import {teamMembers} from "./data/teamData";

import WyChooseUs from './components/whyChooseUs/WhyChooseUs';

import './App.css';
import LatestJobs from './components/LatestJob/LatestJobs';

const data = [
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
];
const header = ['Position', 'Salary', 'Date', ''];
function App() {
  return (
<<<<<<< HEAD
    <div>
      <Hero/> 
      <LatestJobs data={data} headers={header} />
      <WyChooseUs />
      {/* <Experience/> */}
      <MeetOurTeam teamMembers={teamMembers}/>
      {/* <Education/> */}

=======
    <div className="App">
      <Hero/> 
      <WyChooseUs />
      <Experience/>
      <MeetOurTeam teamMembers={teamMembers}/>
      <LatestJobs data={data} headers={header} />
      <Education/>
>>>>>>> 6459caba160cd823fad5bcd6340c123014d8badb
    </div>
  );
}

export default App;

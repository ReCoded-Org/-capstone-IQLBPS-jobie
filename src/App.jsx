import React from 'react';
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
    <div className="App">
      <Hero/> 
      <WyChooseUs />
      <Experience/>
      <MeetOurTeam teamMembers={teamMembers}/>
      <LatestJobs data={data} headers={header} />
      <Education/>
    </div>
  );
}

export default App;

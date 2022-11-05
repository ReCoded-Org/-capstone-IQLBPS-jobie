import React from 'react';
import AboutUsComponent from './components/AboutUsComponent';
import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import CompanyShowcaseComponent from './components/companyShowcaseComponent/CompanyShowcaseComponent';
import {showCaseData} from "./data/showCaseData"
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
    <div>
      <Hero />
      <CompanyShowcaseComponent showCaseData={showCaseData}/>
      <LatestJobs data={data} headers={header} />
      <WyChooseUs />
      <AboutUsComponent />
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;

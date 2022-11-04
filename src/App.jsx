import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero/Hero';
import Localize from './Localize';
import MeetOurTeam from './components/MeetOurTeam/MeetOurTeam';
import { teamMembers } from './data/teamData';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import CompanyShowcaseComponent from './components/companyShowcaseComponent/CompanyShowcaseComponent';
import { showCaseData } from './data/showCaseData';
import './App.css';
import SaveButton from './components/SaveButton';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';
import LatestJobs from './components/LatestJob/LatestJobs';
import HowItWorks from './components/About/HowItWorks/HowItWorks';

const data = [
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
];
const header = ['Position', 'Salary', 'Date', ''];
function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <SaveButton/>
      <h1>{t('hello')}</h1>
      <Localize />
      <HowItWorks />
      <CompanyShowcaseComponent showCaseData={showCaseData} />
      <LatestJobs data={data} headers={header} />
      <MeetOurTeam teamMembers={teamMembers} />
      <WyChooseUs />
      <Experience />
      <Education />
    </div>
  );
}

export default App;

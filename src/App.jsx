import React from 'react';
import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import LatestJobs from './components/LatestJob/LatestJobs';

const data = [
  {
    position: 'Web Developer',
    salary: '2000$-3000$',
    date: '10/10/2022',
    id: 1,
  },
  {
    position: 'Web Developer',
    salary: '2000$-3000$',
    date: '10/10/2022',
    id: 2,
  },
  {
    position: 'Web Developer',
    salary: '2000$-3000$',
    date: '10/10/2022',
    id: 5,
  },
  {
    position: 'Web Developer',
    salary: '2000$-3000$',
    date: '10/10/2022',
    id: 3,
  },
  {
    position: 'Web Developer',
    salary: '2000$-3000$',
    date: '10/10/2022',
    id: 4,
  },
];
const header = [
  { title: 'Position', id: 1 },
  { title: 'Salary', id: 2 },
  { title: 'Date', id: 3 },
  { title: '', id: 4 },
];
function App() {
  return (
    <div>
      <Hero />
      <LatestJobs data={data} headers={header} />
      <WyChooseUs />
    </div>
  );
}

export default App;

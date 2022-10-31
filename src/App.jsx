import React from 'react';
import Hero from './components/Hero/Hero';
import './App.css';
import LatestJobs from './components/LatestJob/LatestJobs';

const data = [
  {
    position: 'Web Developer f',
    salary: '2000$-3000$',
    date: '10/10/2022',
    fullTime: true,
    partTime: false,
    remote: false,
  },
  {
    position: 'Web Developer p',
    salary: '2000$-3000$',
    date: '10/10/2022',
    fullTime: false,
    partTime: true,
    remote: false,
  },
  {
    position: 'Web Developer fr',
    salary: '2000$-3000$',
    date: '10/10/2022',
    fullTime: true,
    partTime: false,
    remote: true,
  },
  {
    position: 'Web Developer pr',
    salary: '2000$-3000$',
    date: '10/10/2022',
    fullTime: false,
    partTime: true,
    remote: true,
  },
  {
    position: 'Web Developer fr',
    salary: '2000$-3000$',
    date: '10/10/2022',
    fullTime: true,
    partTime: false,
    remote: true,
  },
  {
    position: 'Web Developer r',
    salary: '2000$-3000$',
    date: '10/10/2022',
    fullTime: false,
    partTime: false,
    remote: true,
  },
  {
    position: 'Web Developer fp',
    salary: '2000$-3000$',
    date: '10/10/2022',
    fullTime: true,
    partTime: true,
    remote: false,
  },
];
const header = {
  title: 'Latest Jobs',
  first: 'Position',
  second: 'Salary',
  third: 'Date',
};
function App() {
  return (
    <div>
      <Hero />
      <LatestJobs data={data} headers={header} />
    </div>
  );
}

export default App;

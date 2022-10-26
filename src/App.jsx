import React from 'react';
import Hero from './components/Hero/Hero';
import './App.css';
import LatestJobs from './components/LatestJob/LatestJobs';

const data = [
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
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

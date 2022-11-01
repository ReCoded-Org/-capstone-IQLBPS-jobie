import React from 'react';
import renderer from 'react-test-renderer';
import LatestJobs from '../LatestJobs';
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
it('renders Latest Jobs correctly', () => {
  const tree = renderer
    .create(<LatestJobs headers={header} data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

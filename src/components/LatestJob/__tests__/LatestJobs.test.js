import React from 'react';
import renderer from 'react-test-renderer';
import LatestJobs from '../LatestJobs';
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
it('renders Latest Jobs correctly', () => {
  const tree = renderer
    .create(<LatestJobs headers={header} data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

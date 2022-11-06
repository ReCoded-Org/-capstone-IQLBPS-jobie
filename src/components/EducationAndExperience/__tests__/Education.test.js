import renderer from 'react-test-renderer';
import Education from '../Education';
import React from 'react';

it('renders Education commponent correctly', () => {
  const tree = renderer.create(<Education />).toJSON();
  expect(tree).toMatchSnapshot();
});

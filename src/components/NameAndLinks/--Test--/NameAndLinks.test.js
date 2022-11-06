import renderer from 'react-test-renderer';
import NameAndLinks from '../NameAndLinks';
import React from 'react';

it('renders  NameAndLinks component correctly', () => {
  const tree = renderer.create(<NameAndLinks />).toJSON();
  expect(tree).toMatchSnapshot();
});

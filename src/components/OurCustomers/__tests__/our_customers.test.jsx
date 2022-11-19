import React from 'react';
import renderer from 'react-test-renderer';
import OurCustomers from '../our_customers';


it('renders correctly when there are no items', () => {
  const tree = renderer.create(<OurCustomers />).toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import renderer from 'react-test-renderer';
import ContactSkills from '../contact_skills_page';


it('renders correctly when there are no items', () => {
  const tree = renderer.create(<ContactSkills />).toJSON();
  expect(tree).toMatchSnapshot();
});
import renderer from 'react-test-renderer';
import  Experience from "../Experience"
import React from "react"

it('renders Experience commponent correctly', () => {
  const tree = renderer
    .create( <Experience/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
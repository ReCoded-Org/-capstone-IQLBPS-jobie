import renderer from "react-test-renderer";
import React from "react";
import Contact from "../Contact";

it("renders Contact", () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});

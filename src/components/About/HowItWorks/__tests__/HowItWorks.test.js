import React from "react";
import renderer from "react-test-renderer";
import HowItWorks from "../HowItWorks";
it("renders Custom button correctly", () => {
  const tree = renderer.create(<HowItWorks />).toJSON();
  expect(tree).toMatchSnapshot();
});

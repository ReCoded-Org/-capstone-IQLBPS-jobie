import React from "react";
import renderer from "react-test-renderer";
import CustomButton from "../CustomButton";
it("renders Custom button correctly", () => {
  const tree = renderer.create(<CustomButton btnName="Any" />).toJSON();
  expect(tree).toMatchSnapshot();
});

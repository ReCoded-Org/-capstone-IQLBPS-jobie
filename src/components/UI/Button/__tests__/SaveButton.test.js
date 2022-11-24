import React from "react";
import renderer from "react-test-renderer";
import SaveButton from "../SaveButton";
it("renders Custom button correctly", () => {
  const tree = renderer.create(<SaveButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

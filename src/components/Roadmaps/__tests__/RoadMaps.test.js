import React from "react";
import renderer from "react-test-renderer";
import RoadMaps from "../RoadMaps";

it("renders Road Maps Component correctly", () => {
  const tree = renderer.create(<RoadMaps />).toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from "react-test-renderer";
import Navbar from "../Navbar.jsx";
import React from "react";

it("renders Meet Our Team component correctly", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

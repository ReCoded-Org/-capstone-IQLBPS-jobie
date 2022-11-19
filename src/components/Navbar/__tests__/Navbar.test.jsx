import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import React from "react";

it("renders Meet Our Team component correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

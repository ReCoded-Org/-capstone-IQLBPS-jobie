import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar.jsx";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
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

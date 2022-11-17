import renderer from "react-test-renderer";
import Navbar from "../Navbar.jsx";
import React from "react";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

it("renders Meet Our Team component correctly", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

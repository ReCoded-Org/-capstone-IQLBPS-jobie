import renderer from "react-test-renderer";
import React from "react";
import Contact from "../Contact";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Contact", () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});

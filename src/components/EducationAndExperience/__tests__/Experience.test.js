import renderer from "react-test-renderer";
import Experience from "../Experience";
import React from "react";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Experience commponent correctly", () => {
  const tree = renderer.create(<Experience />).toJSON();
  expect(tree).toMatchSnapshot();
});

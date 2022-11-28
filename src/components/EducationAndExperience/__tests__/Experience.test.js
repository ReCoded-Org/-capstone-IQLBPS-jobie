import renderer from "react-test-renderer";
import React from "react";
import Experience from "../Experience";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Experience commponent correctly", () => {
  const tree = renderer.create(<Experience />).toJSON();
  expect(tree).toMatchSnapshot();
});

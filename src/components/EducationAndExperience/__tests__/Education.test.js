import renderer from "react-test-renderer";
import Education from "../Education";
import React from "react";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Education commponent correctly", () => {
  const tree = renderer.create(<Education />).toJSON();
  expect(tree).toMatchSnapshot();
});

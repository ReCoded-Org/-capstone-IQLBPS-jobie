import React from "react";
import renderer from "react-test-renderer";
import HowItWorks from "../HowItWorks";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Custom button correctly", () => {
  const tree = renderer.create(<HowItWorks />).toJSON();
  expect(tree).toMatchSnapshot();
});

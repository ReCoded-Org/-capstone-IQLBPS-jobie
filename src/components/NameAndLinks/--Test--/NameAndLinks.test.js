import renderer from "react-test-renderer";
import NameAndLinks from "../NameAndLinks";
import React from "react";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

it("renders  NameAndLinks component correctly", () => {
  const tree = renderer.create(<NameAndLinks />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";

import GetInTouchForm from "./GetInTouchForm";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Get in touch form corectlly  correctly", () => {
  const tree = renderer.create(<GetInTouchForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

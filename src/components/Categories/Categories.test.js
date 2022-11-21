import renderer from "react-test-renderer";

import Categories from "./Categories";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<Categories />).toJSON();
  expect(tree).toMatchSnapshot();
});

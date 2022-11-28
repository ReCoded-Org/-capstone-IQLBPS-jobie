import renderer from "react-test-renderer";

import AboutHero from "./AboutHero";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<AboutHero />).toJSON();
  expect(tree).toMatchSnapshot();
});

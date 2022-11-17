import renderer from "react-test-renderer";
import WhyChooseUs from "../WhyChooseUs";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<WhyChooseUs />).toJSON();
  expect(tree).toMatchSnapshot();
});

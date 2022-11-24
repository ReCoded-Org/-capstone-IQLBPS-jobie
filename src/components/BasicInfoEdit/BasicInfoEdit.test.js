import renderer from "react-test-renderer";
import BasicInfoEdit from "./BasicInfoEdit";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<BasicInfoEdit />).toJSON();
  expect(tree).toMatchSnapshot();
});

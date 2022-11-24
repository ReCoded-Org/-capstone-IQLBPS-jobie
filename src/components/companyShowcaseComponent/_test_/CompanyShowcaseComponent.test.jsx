import renderer from "react-test-renderer";
import CompanyShowcaseComponent from "../CompanyShowcaseComponent.jsx";
import { showCaseData } from "../../../data/showCaseData";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Company Showcase Component correctly", () => {
  const tree = renderer
    .create(<CompanyShowcaseComponent showCaseData={showCaseData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

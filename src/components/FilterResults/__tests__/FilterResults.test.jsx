import renderer from "react-test-renderer";
import FilterResults from "../FilterResults";
import { filterData } from "../../../data/filterData";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));
it("renders Company Showcase Component correctly", () => {
  const tree = renderer
    .create(<FilterResults filterData={filterData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

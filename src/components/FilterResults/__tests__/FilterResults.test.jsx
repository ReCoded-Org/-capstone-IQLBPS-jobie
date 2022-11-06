import renderer from "react-test-renderer";
import FilterResults from "../FilterResults";
import { filterData } from "../../../data/filterData";

it("renders Company Showcase Component correctly", () => {
  const tree = renderer
    .create(<FilterResults filterData={filterData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

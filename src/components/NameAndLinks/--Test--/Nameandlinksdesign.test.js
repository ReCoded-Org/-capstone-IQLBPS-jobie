import renderer from "react-test-renderer";
import NameAndLinksdesign from "../Nameandlinksdesign";


it("renders  NameAndLinksdesign component correctly", () => {
  const tree = renderer.create(<NameAndLinksdesign />).toJSON();
  expect(tree).toMatchSnapshot();
});
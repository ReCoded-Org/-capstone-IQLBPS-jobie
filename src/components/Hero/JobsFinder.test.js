import renderer from "react-test-renderer";
import JobsFinder from "./JobsFinder";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<JobsFinder />).toJSON();
  expect(tree).toMatchSnapshot();
});

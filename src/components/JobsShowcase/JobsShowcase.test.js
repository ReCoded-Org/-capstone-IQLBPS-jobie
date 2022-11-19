import renderer from "react-test-renderer";
import { showcaseData } from "../../data";
import JobsShowcase from "./JobsShowcase";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer
    .create(<JobsShowcase showcaseArray={showcaseData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

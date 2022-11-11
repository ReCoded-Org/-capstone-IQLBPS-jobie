import renderer from "react-test-renderer";

import BookmarkedJobs from "../BookmarkedJobs";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<BookmarkedJobs />).toJSON();
  expect(tree).toMatchSnapshot();
});

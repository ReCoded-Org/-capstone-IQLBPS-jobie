import renderer from "react-test-renderer";

import Showcase from "./Showcase";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<Showcase />).toJSON();
  expect(tree).toMatchSnapshot();
});

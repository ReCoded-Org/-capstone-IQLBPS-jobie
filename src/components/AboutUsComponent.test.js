import renderer from "react-test-renderer";

import AboutUsComponent from "./AboutUsComponent";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<AboutUsComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

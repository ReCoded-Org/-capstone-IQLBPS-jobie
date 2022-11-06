import renderer from "react-test-renderer";

import WhyChooseUs from "../WhyChooseUs";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<WhyChooseUs />).toJSON();
  expect(tree).toMatchSnapshot();
});

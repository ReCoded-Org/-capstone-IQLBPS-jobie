import renderer from "react-test-renderer";

import AboutHero from "./AboutHero";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<AboutHero />).toJSON();
  expect(tree).toMatchSnapshot();
});

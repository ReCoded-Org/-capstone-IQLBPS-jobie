import renderer from "react-test-renderer";
import BasicInfoEdit from "./BasicInfoEdit";

it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<BasicInfoEdit />).toJSON();
  expect(tree).toMatchSnapshot();
});

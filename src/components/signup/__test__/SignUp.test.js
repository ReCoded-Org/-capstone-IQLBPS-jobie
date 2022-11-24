import renderer from "react-test-renderer";
import SignUp from "../SignUp";

jest.mock("react-redux", () => ({
  useDispatch: () => ({ t: (key) => key }),
}));
it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchSnapshot();
});

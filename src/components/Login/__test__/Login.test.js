import renderer from "react-test-renderer";
import Login from "../Login";

jest.mock("react-router-dom", () => ({
  useNavigate: () => ({ t: (key) => key }),
}));
it("renders correctly when the component matches the snapshot", () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

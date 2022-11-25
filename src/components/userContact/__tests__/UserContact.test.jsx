import renderer from "react-test-renderer";
import UserContact from "../UserContact.jsx";

it("renders User Contact Component correctly", () => {
  const tree = renderer.create(<UserContact />).toJSON();
  expect(tree).toMatchSnapshot();
});

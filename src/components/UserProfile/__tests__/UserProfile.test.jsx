import renderer from "react-test-renderer";
import UserProfile from "../UserProfile.jsx";
import { users } from "../../../data/usersData";

it("renders Users Profile Component correctly", () => {
  const tree = renderer.create(<UserProfile users={users} />).toJSON();
  expect(tree).toMatchSnapshot();
});

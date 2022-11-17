import renderer from "react-test-renderer";
import MeetOurTeam from "../MeetOurTeam.jsx";
import { teamMembers } from "../../../data/teamData";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));


it("renders Meet Our Team component correctly", () => {
  const tree = renderer
    .create(<MeetOurTeam teamMembers={teamMembers} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from "react-test-renderer";
import OurCollaborators from "../OurCollaborators.jsx";
import { showCaseData } from "../../../data/showCaseData";

it("renders Our Collaborators Component correctly", () => {
  const tree = renderer
    .create(<OurCollaborators showCaseData={showCaseData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

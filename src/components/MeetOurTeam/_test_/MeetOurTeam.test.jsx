import renderer from 'react-test-renderer';
import MeetOurTeam from '../MeetOurTeam.jsx'

it('renders Meet Our Team component correctly', () => {
    const tree = renderer
      .create(<MeetOurTeam/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
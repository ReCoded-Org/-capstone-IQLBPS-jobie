import renderer from 'react-test-renderer';
import CompanyShowcaseComponent from '../CompanyShowcaseComponent.jsx';
import { showCaseData } from "../../../data/showCaseData";

it('renders Company Showcase Component correctly', () => {
  const tree = renderer
    .create(<CompanyShowcaseComponent showCaseData={showCaseData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

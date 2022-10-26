import renderer from 'react-test-renderer';
import CompanyShowcaseComponent from "../CompanyShowcaseComponent.jsx"

it('renders Company Showcase Component correctly', () => {
    const tree = renderer
      .create(<CompanyShowcaseComponent/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


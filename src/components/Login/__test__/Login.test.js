import renderer from 'react-test-renderer';

import Login from '../Login';

it('renders correctly when the component matches the snapshot', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

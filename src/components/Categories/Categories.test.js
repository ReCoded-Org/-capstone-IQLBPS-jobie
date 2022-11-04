import renderer from 'react-test-renderer';

import Categories from './Categories';

it('renders correctly when the component matches the snapshot', () => {
  const tree = renderer.create(<Categories />).toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from 'react-test-renderer';

import Hero from './Hero';

it('renders correctly when the component matches the snapshot', () => {
  const tree = renderer.create(<Hero />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import GetInTouchForm from './GetInTouchForm';

it('renders Get in touch form corectlly  correctly', () => {
  const tree = renderer
    .create(<GetInTouchForm/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

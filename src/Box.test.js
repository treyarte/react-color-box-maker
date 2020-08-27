import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

it('Should render without crashing', () => {
  render(<Box />);
});

it('Should match its snapshot', () => {
  const { asFragment } = render(<Box />);

  expect(asFragment).toMatchSnapshot();
});

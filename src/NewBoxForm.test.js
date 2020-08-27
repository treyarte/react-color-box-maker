import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('Should render without crashing', () => {
  render(<NewBoxForm />);
});

it('Should match its snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);

  expect(asFragment).toMatchSnapshot();
});

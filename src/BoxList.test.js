import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './Boxlist';

it('Should render without crashing', () => {
  render(<BoxList />);
});

it('Should match its snapshot', () => {
  const { asFragment } = render(<BoxList />);

  expect(asFragment).toMatchSnapshot();
});

it('Should create a new box', () => {
  const { getByLabelText, queryByText, queryByDisplayValue } = render(
    <BoxList />
  );

  const colorInput = getByLabelText('Color');
  const widthInput = getByLabelText('Width');
  const heightInput = getByLabelText('Height');
  const submitBtn = queryByText('Add Box');

  fireEvent.change(colorInput, { target: { value: 'pink' } });
  fireEvent.change(widthInput, { target: { value: 300 } });
  fireEvent.change(heightInput, { target: { value: 500 } });
  fireEvent.click(submitBtn);

  expect(queryByText('Remove')).toBeInTheDocument();
  expect(queryByText('Remove').previousSibling).toHaveStyle(`
    width: 300px;
    height: 500px;
    background-color: pink;
  `);
});

it('Should remove a box', () => {
  const { getByLabelText, queryByText, queryByDisplayValue } = render(
    <BoxList />
  );

  const colorInput = getByLabelText('Color');
  const widthInput = getByLabelText('Width');
  const heightInput = getByLabelText('Height');
  const submitBtn = queryByText('Add Box');

  fireEvent.change(colorInput, { target: { value: 'pink' } });
  fireEvent.change(widthInput, { target: { value: 300 } });
  fireEvent.change(heightInput, { target: { value: 500 } });
  fireEvent.click(submitBtn);
  const removeBtn = queryByText('Remove');
  expect(removeBtn).toBeInTheDocument();

  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});

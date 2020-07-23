import React from 'react';
import { render } from '@testing-library/react';
import _App from './_App';

test('renders learn react link', () => {
  const { getByText } = render(<_App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

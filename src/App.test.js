import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Todos on header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todos/);
  expect(linkElement).toBeInTheDocument();
});

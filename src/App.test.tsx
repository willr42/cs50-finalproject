import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@fontsource/playfair-display';
import '@fontsource/lato';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test 1
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test 2
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/code/i);
  expect(linkElement).toBeInTheDocument();
});

// Test 3
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey/i);
  expect(linkElement).toBeInTheDocument();
});


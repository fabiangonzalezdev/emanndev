import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Soy Fabian Gonzalez text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Soy Fabian Gonzalez/i);
  expect(headingElement).toBeInTheDocument();
});

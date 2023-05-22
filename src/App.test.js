import { render, screen } from '@testing-library/react';
import App from './App';

test("renders App component", () => {
  render(<App />);
  const appElement = screen.getByTestId("app-component");
  expect(appElement).toBeInTheDocument();
});

test('renders ComponantSelection component', () => {
  render(<App />);
  const componantSelectionElement = screen.getByTestId('componant-selection-component');
  expect(componantSelectionElement).toBeInTheDocument();
});

// Add more test cases as needed

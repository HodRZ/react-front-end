import { render, screen, waitFor } from '@testing-library/react';
import App from '../App.jsx';

test('renders the super deluxe form', async () => {
  render(<App />);
  const infoForm = await waitFor(() => screen.findByTestId('userForm'));
  expect(infoForm).toBeInTheDocument();
});

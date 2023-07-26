import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Hello from '../components/hello';

describe('Hello', () => {
  it('renders the correct text', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

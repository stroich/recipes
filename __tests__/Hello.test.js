// components/__tests__/Hello.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello from '../components/Hello';

describe('Hello', () => {
  it('renders the correct text', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

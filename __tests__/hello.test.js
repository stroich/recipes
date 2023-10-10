import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Hello', () => {
  it('renders the correct text', () => {
    render();
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

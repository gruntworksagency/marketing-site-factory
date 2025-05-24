import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders the button with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /Click Me/i })).toBeInTheDocument();
  });
}); 
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import VisiblePassword from './index';

describe('VisiblePassword', () => {
  it('renders the masked password by default', () => {
    render(<VisiblePassword data="mysecretpassword" />);

    const textElement = screen.getByText(/\*+/); // Matches masked string
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('****************');
  });

  it('reveals the password when the icon is clicked', () => {
    const { container } = render(<VisiblePassword data="mysecretpassword" />);

    const iconElement = container.getElementsByClassName(
      'svl-visible-password-icon',
    )?.[0];
    fireEvent.click(iconElement);

    const textElement = screen.getByText(/mysecretpassword/);
    expect(textElement).toBeInTheDocument();
  });

  it('masks the password again when the icon is clicked twice', () => {
    const { container } = render(<VisiblePassword data="mysecretpassword" />);

    const iconElement = container.getElementsByClassName(
      'svl-visible-password-icon',
    )?.[0];
    fireEvent.click(iconElement); // Reveal password
    fireEvent.click(iconElement); // Mask password

    const textElement = screen.getByText(/\*+/); // Matches masked string
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('****************');
  });
});

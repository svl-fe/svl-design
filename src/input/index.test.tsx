import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from './index';

describe('<Input />', () => {
  it('render Input with dumi test', () => {
    render(<Input value="value" placeholder="placeholder"></Input>);
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });
});

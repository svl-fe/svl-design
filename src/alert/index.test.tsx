import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './index';

describe('<Alert />', () => {
  it('render Alert with dumi test', () => {
    render(<Alert message="testpop"></Alert>);
    expect(screen.getByText('testpop')).toBeInTheDocument();
  });
});

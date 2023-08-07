import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  it('render Button with dumi test', () => {
    render(<Button>testpop</Button>);
    expect(screen.getByText('testpop')).toBeInTheDocument();
  });
});

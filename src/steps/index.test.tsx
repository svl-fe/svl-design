import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Steps from './index';

describe('<Dropdown />', () => {
  it('render Dropdown with dumi test', () => {
    render(<Steps>testpop</Steps>);
    expect(screen.getByText('testpop')).toBeInTheDocument();
  });
});

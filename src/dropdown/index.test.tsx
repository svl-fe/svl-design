import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './index';

describe('<Dropdown />', () => {
  it('render Dropdown with dumi test', () => {
    render(<Dropdown.Button overlay={<div></div>}>testpop</Dropdown.Button>);
    expect(screen.getByText('testpop')).toBeInTheDocument();
  });
});

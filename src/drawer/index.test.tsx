import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Drawer from './index';

describe('<Drawer />', () => {
  it('render Drawer with dumi', () => {
    const msg = 'Drawer-title';
    render(<Drawer title={msg} titleName={msg} />);
    expect(screen.queryByText(msg)).toBe(null);
    render(<Drawer open title={msg} titleName={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import PageDrawer from './index';

describe('<PageDrawer />', () => {
  it('render PageDrawer with dumi', () => {
    const msg = 'Drawer-title';
    render(<PageDrawer title={msg} titleName={msg} />);
    expect(screen.queryByText(msg)).toBe(null);
    render(<PageDrawer open title={msg} titleName={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});

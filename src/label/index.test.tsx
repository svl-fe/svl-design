import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Label from './index';

describe('<Label />', () => {
  it('test label type', () => {
    render(<Label type="line">test label</Label>);
    expect(screen.getByText('test label')).toHaveClass('svl-label-type-line');

    render(<Label type="face">test label face</Label>);
    expect(screen.getByText('test label face')).toHaveClass('svl-label-type-face');

    render(<Label type="ghost">test label ghost</Label>);
    expect(screen.getByText('test label ghost')).toHaveClass('svl-label-type-ghost');
  });

  it('test label size', () => {
    render(<Label size="large">test label</Label>);
    expect(screen.getByText('test label')).toHaveClass('svl-label-size-lg');
    render(<Label size="small">test label small</Label>);
    expect(screen.getByText('test label small')).toHaveClass('svl-label-size-sm');
  });

  it('test label status', () => {
    render(<Label status="success">test label success</Label>);
    expect(screen.getByText('test label success')).toHaveClass('svl-label-status-success');
    render(<Label status="default">test label default</Label>);
    expect(screen.getByText('test label default')).toHaveClass('svl-label-status-default');
    render(<Label status="warning">test label warning</Label>);
    expect(screen.getByText('test label warning')).toHaveClass('svl-label-status-warning');
    render(<Label status="error">test label error</Label>);
    expect(screen.getByText('test label error')).toHaveClass('svl-label-status-error');
  });

  it('test label closeable', () => {
    const handleClick = jest.fn();
    render(
      <Label closable onClose={handleClick} status="success">
        test label success
      </Label>,
    );
    const element = screen.getByTestId('custom-element');
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
    expect(screen.getByText('test label success')).toHaveClass('svl-label-hidden');
  });
});

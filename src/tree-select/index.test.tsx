import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeSelect from './index';

describe('<TreeSelect />', () => {
  it('should support notFoundContent', () => {
    const notFound = 'notFoundContent';
    render(<TreeSelect treeIcon open notFoundContent={notFound} />);
    expect(screen.queryByText(notFound)).toBeInTheDocument();
  });
});

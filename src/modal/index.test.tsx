import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Modal from './index';

describe('<Modal />', () => {
  it('render Modal with dumi', () => {
    const titleName = '模态框标题';

    render(<Modal titleName={titleName} open={true} />);
    expect(screen.queryByText(titleName)).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './index';

describe('<Modal />', () => {
  it('render Modal with dumi', () => {
    const titleName = '模态框标题';

    render(<Modal titleName={titleName} visible={true} />);
    expect(screen.queryByText(titleName)).toBeInTheDocument();
  });
});

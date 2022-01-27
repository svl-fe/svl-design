import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Popconfirm from './index';

describe('<Popconfirm />', () => {
  it('render Popconfirm with dumi test', () => {
    const titleName = '模态框标题';

    render(
      <Popconfirm title="大标题" titleName={titleName}>
        testpop
      </Popconfirm>,
    );
    expect(screen.queryByText('testpop')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/testpop/i));
    expect(screen.queryByText('大标题')).toBeInTheDocument();
  });
});

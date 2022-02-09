import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  it('render Button with dumi test', () => {
    const titleName = '模态框标题';

    render(<Button>testpop</Button>);
    expect(screen.getByText('testpop')).toBeInTheDocument();
  });
});

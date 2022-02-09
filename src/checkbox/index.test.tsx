import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './index';

describe('<Checkbox />', () => {
  it('render Checkbox with dumi', () => {
    const titleName = '模态框标题';

    render(<Checkbox />);
    expect(screen.queryByText(titleName)).toBeInTheDocument();
  });
});

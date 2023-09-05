import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Checkbox from './index';

describe('<Checkbox />', () => {
  it('render Checkbox with dumi', () => {
    const titleName = '模态框标题';

    render(<Checkbox>{titleName}</Checkbox>);
    expect(screen.queryByText(titleName)).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './index';

const { Option } = Select;

describe('<Select />', () => {
  it('should have option', () => {
    render(
      <Select defaultValue="Lucy">
        <Option value="Lucy">Lucy</Option>
      </Select>,
    );

    expect(screen.queryByTitle('Lucy')).toBeInTheDocument();
  });
});

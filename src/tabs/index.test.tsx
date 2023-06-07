import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Tabs from './index';

describe('<Tabs />', () => {
  it('render radius-card Tabs with dumi test', () => {
    const { container } = render(
      <Tabs
        type="radius-card"
        items={[
          {
            label: `Tab Title`,
            key: 'tab',
            children: (
              <>
                <p>Content of Tab Pane</p>
              </>
            ),
          },
        ]}
      ></Tabs>,
    );
    expect(container.querySelector('.svl-radius-tabs')).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Steps } from 'antd';
import React from 'react';

// window.matchMedia =
//   window.matchMedia ||
//   function () {
//     return {
//       matches: false,
//       addListener: function () {},
//       removeListener: function () {},
//     };
//   };

describe('<Steps />', () => {
  it('render steps with dumi test', () => {
    render(
      <Steps
        items={[{ title: '第一步' }, { title: '第二步' }, { title: '第三步' }]}
      >
        {/* <Steps.Step title="Finished" description="This is a description." /> */}
      </Steps>,
    );
    expect(screen.getByText('第一步')).toBeInTheDocument();
  });
});

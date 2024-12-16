import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import ScrollBoxShadow from './index';

describe('ScrollBoxShadow', () => {
  it('renders the component and its children', () => {
    render(
      <ScrollBoxShadow>
        <div>Content</div>
      </ScrollBoxShadow>,
    );

    const childElement = screen.getByText(/Content/);
    expect(childElement).toBeInTheDocument();
  });

  it('shows top shadow when scrolled down; shows bottom shadow when not fully scrolled;', async () => {
    const { container } = await act(async () => {
      const result = render(
        <ScrollBoxShadow>
          <div
            className="content"
            style={{ height: '200px', overflow: 'auto' }}
          >
            <div style={{ height: 400 }}>Content</div>
          </div>
        </ScrollBoxShadow>,
      );

      return result;
    });

    const scrollBox = container.querySelector('.content');
    // 模拟组件挂载后立即设置滚动属性
    Object.defineProperties(scrollBox, {
      scrollHeight: { value: 400, writable: true },
      clientHeight: { value: 200, writable: true },
      scrollTop: { value: 20, writable: true },
    });
    scrollBox?.dispatchEvent(new Event('scroll'));

    // 延时 1 秒
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const topShadow = container.querySelector('.svl-scroll-boxshadow-hastop');
    expect(topShadow).toBeInTheDocument();

    const bottomShadow = container.querySelector(
      '.svl-scroll-boxshadow-hasbottom',
    );
    expect(bottomShadow).toBeInTheDocument();
  });

  it('hides top shadow when scrolled to top', async () => {
    const { container } = render(
      <ScrollBoxShadow>
        <div className="content" style={{ height: '200px', overflow: 'auto' }}>
          <div style={{ height: 400 }}>Content</div>
        </div>
      </ScrollBoxShadow>,
    );

    const scrollBox = container.querySelector('.content');
    Object.defineProperty(scrollBox, 'scrollTop', {
      value: 0,
      writable: true,
    });
    scrollBox?.dispatchEvent(new Event('scroll'));

    // 延时 1 秒
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const topShadow = container.querySelector('.svl-scroll-boxshadow-hastop');
    expect(topShadow).not.toBeInTheDocument();
  });

  it('hides bottom shadow when fully scrolled', async () => {
    const { container } = render(
      <ScrollBoxShadow>
        <div className="content" style={{ height: '200px', overflow: 'auto' }}>
          <div style={{ height: 400 }}>Content</div>
        </div>
      </ScrollBoxShadow>,
    );

    const scrollBox = container.querySelector('.content');
    Object.defineProperty(scrollBox, 'scrollTop', {
      value: (scrollBox?.scrollHeight || 0) - (scrollBox?.clientHeight || 0),
      writable: true,
    });
    scrollBox?.dispatchEvent(new Event('scroll'));

    // 延时 1 秒
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const bottomShadow = container.querySelector(
      '.svl-scroll-boxshadow-hasbottom',
    );
    expect(bottomShadow).not.toBeInTheDocument();
  });

  it('attaches ref correctly to the first child with ref', () => {
    const childRef = createRef<HTMLDivElement>();

    render(
      <ScrollBoxShadow>
        <div ref={childRef}>Content</div>
      </ScrollBoxShadow>,
    );

    expect(childRef.current).toBeInTheDocument();
    expect(childRef.current?.textContent).toBe('Content');
  });
});

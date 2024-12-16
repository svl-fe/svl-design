import { useScroll, useSize } from 'ahooks';
import React, { FC, MutableRefObject, useMemo, useRef } from 'react';
import './style/index.less';

interface IScorllBosxhsdow {
  children: React.ReactElement;
}

// 兼容处理 `ref`
const attachRef = (
  child: React.ReactElement & { ref?: React.Ref<HTMLElement> },
  customRef: any,
) => {
  if (!React.isValidElement(child)) return child;

  // 获取原始的 `ref`
  const originalRef = child.ref;

  return React.cloneElement(child, {
    ref: (node: HTMLElement | null) => {
      // 设置我们自己的 `ref`
      if (customRef) {
        (customRef as MutableRefObject<HTMLElement | null>).current = node;
      }

      // 调用原始 `ref` 的回调或设置其值
      if (typeof originalRef === 'function') {
        originalRef(node);
      } else if (originalRef && typeof originalRef === 'object') {
        (originalRef as MutableRefObject<HTMLElement | null>).current = node;
      }
    },
  });
};

/**
 * 滚动dom 增加上下阴影，提示有更多内容
 * @param param0
 * @returns
 */
const ScrollBoxShadow: FC<IScorllBosxhsdow> = ({ children }) => {
  const firstChildRef = useRef<HTMLDivElement>(null);
  const { top } = useScroll(firstChildRef);
  const { height: clientHeight = 0 } = useSize(firstChildRef);
  const { scrollHeight = 0 } = firstChildRef?.current || {};
  const childArray = React.Children.toArray(children);

  const { topFlag, bottomFlag } = useMemo(() => {
    return {
      topFlag: top > 0,
      bottomFlag: top < scrollHeight - clientHeight,
    };
  }, [clientHeight, top, scrollHeight]);

  return (
    <div className="svl-scroll-boxshadow">
      {topFlag && <div className="svl-scroll-boxshadow-hastop"></div>}
      {bottomFlag && <div className="svl-scroll-boxshadow-hasbottom"></div>}
      {childArray.map(
        (child: any, index) =>
          index === 0
            ? attachRef(child, firstChildRef) // 第一个子元素添加 ref 且需要兼容ref
            : child, // 其他子元素正常渲染
      )}
    </div>
  );
};

export default ScrollBoxShadow;

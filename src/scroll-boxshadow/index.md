---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 5
toc: false
---

## ScrollBoxShadow 滚动上下阴影

示例:

```tsx
import { useRef } from 'react';
import { ScrollBoxShadow } from 'svl-design';

export default () => {
  const ref = useRef(null);

  return (
    <ScrollBoxShadow>
      <div
        onClick={() => {
          console.log(ref.current);
        }}
        style={{ height: 200, overflowY: 'auto', cursor: 'pointer' }}
        ref={ref}
      >
        滚动内容头部
        <div style={{ height: 500, background: 'pink', opacity: 0.1 }}></div>
        滚动内容底部
      </div>
    </ScrollBoxShadow>
  );
};
```

#### Children 属性需要是一个 Y 方向可滚动的元素

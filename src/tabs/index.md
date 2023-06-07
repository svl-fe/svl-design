---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 4
---

## Tabs 标签页

示例:

```tsx
import React from 'react';
import { Tabs } from 'svl-design';

export default () => {
  const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab Title ${id}`,
      key: id,
      children: (
        <>
          <p>Content of Tab Pane {id}</p>
          <p>Content of Tab Pane {id}</p>
          <p>Content of Tab Pane {id}</p>
        </>
      ),
    };
  });
  return (
    <div>
      <Tabs type="radius-card" items={items}></Tabs>
      <Tabs type="card" items={items}></Tabs>
      <Tabs items={items}></Tabs>
    </div>
  );
};
```

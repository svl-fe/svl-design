---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 4
toc: false
---

## Tabs 标签页

示例:

```tsx
import { Tabs } from 'svl-design';

export default () => {
  const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab  ${id}`,
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
      <h3>radius-card</h3>
      <Tabs type="radius-card" items={items}></Tabs>
      <h3>out-radius-card</h3>
      <Tabs type="out-radius" items={items}></Tabs>
      <h3>card</h3>
      <Tabs type="card" items={items}></Tabs>
      <h3>line</h3>
      <Tabs items={items}></Tabs>
    </div>
  );
};
```

#### 参数说明

| 属性 | 说明                                                                               | 类型                                                                 | 默认值 | 是否必传 | 版本 |
| ---- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------ | -------- | ---- |
| type | 继承自[Tabs type](https://4x.ant.design/components/tabs-cn/#Tabs),新增 radius-card | 'line' \| 'card' \| 'editable-card' \| 'radius-card' \| 'out-radius' | 'line' |          |      |

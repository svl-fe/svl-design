---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 7
toc: false
---

## VisiblePassword 密码可见性切换

示例:

```tsx
import { VisiblePassword } from 'svl-design';

export default () => {
  return (
    <>
      <VisiblePassword data="mimazhanshi" />
    </>
  );
};
```

| 参数 | 说明 | 类型   | 默认值 | 是否必传 | 版本 |
| ---- | ---- | ------ | ------ | -------- | ---- |
| data | 密码 | string |        | 否       |      |

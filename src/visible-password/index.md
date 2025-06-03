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
      <VisiblePassword
        data="mimazhanshi"
        partialStart={3}
        partialEnd={7}
        className="test"
      />
    </>
  );
};
```

| 参数         | 说明             | 类型                | 默认值 | 是否必传 | 版本 |
| ------------ | ---------------- | ------------------- | ------ | -------- | ---- |
| data         | 密码             | string              |        | 否       |      |
| partialStart | 部分隐藏开始位置 | number              |        | 否       |      |
| partialEnd   | 部分隐藏结束位置 | number              |        | 否       |      |
| showIcon     | 是否显示图标     | boolean             | true   | 否       |      |
| className    | 自定义类名       | string              |        | 否       |      |
| style        | 自定义样式       | React.CSSProperties |        | 否       |      |

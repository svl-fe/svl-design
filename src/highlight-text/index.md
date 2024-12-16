---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 6
toc: false
---

## HighlightText 字符串部分高亮

示例:

```tsx
import { HighlightText } from 'svl-design';

export default () => {
  return <HighlightText className="parent-class" text="search" keyword="ea" />;
};
```

### 继承 HTMLAttributes<HTMLSpanElement>

| 参数            | 说明                       | 类型          | 默认值 | 是否必传 | 版本 |
| --------------- | -------------------------- | ------------- | ------ | -------- | ---- |
| text            | 原始字符串                 | string        |        | 否       | ｜   |
| keyword         | 需要高亮的关键词           | string        |        | 否       | ｜   |
| highlightStyle? | React.高亮部分的样式，可选 | CSSProperties |        | 否       | ｜   |

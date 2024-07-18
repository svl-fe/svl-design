---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据录入
  order: 3
toc: false
---

## Input 输入框

示例:

```tsx
import { Input } from 'svl-design';
const { Search } = Input;

export default () => {
  const handleEnter = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <h1>搜索框 </h1>
      <Search placeholder="placeholder" onSearch={handleEnter} allowClear />
    </div>
  );
};
```

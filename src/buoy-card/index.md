---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 2
toc: false
---

## BuoyCard 浮标卡片

示例:

```tsx
import { BuoyCard, Label } from 'svl-design';

const style = {
  border: '1px solid #eee',
  marginBottom: 10,
  borderRadius: 8,
  padding: 16,
};

export default () => {
  return (
    <div>
      <BuoyCard color="#2A9D8F" text="完成" style={style}>
        <h5>我是title</h5>
        <Label type="ghost" color="#2A9D8F">
          我是标签
        </Label>
      </BuoyCard>
      <BuoyCard color="#2A9D8F" text="审批中" style={style}>
        <h5>我是title</h5>
        <Label type="ghost" color="#2A9D8F">
          我是标签
        </Label>
      </BuoyCard>
      <BuoyCard color="#f4a261" text="等待审批" style={style}>
        <h5>我是title</h5>
        <Label type="ghost" color="#f4a261">
          我是标签
        </Label>
      </BuoyCard>
      <BuoyCard color="#db504a" text="第三方审批" style={style}>
        <h5>我是title</h5>
        <Label type="ghost" color="#db504a">
          我是标签
        </Label>
      </BuoyCard>
      <BuoyCard color="#1677ff" text="我是来凑数的" style={style}>
        <h5>我是title</h5>
        <Label type="ghost" color="#db504a">
          我是标签
        </Label>
      </BuoyCard>
    </div>
  );
};
```

#### 参数说明

- extends `HTMLAttributes<HTMLDivElement>`

| 属性          | 说明       | 类型              | 默认值 | 是否必传 | 版本    |
| ------------- | ---------- | ----------------- | ------ | -------- | ------- |
| color         | 浮标颜色   | `hex` 16 进制颜色 | -      | 否       | `0.1.3` |
| text          | 浮标文字   | string            | -      | 否       | `0.1.3` |
| buoyClassName | 浮标 class | string            | -      | 否       | `0.1.3` |

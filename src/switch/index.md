---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据录入
  order: 4
toc: false
---

## Switch 开关

示例:

```tsx
import React from 'react';
import { Switch } from 'svl-design';

export default () => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Switch
          checkedChildren="启用"
          unCheckedChildren="禁用"
          size="large"
          defaultChecked
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Switch
          checkedChildren="启用"
          unCheckedChildren="禁用"
          size="large"
          defaultChecked
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Switch
          checkedChildren="启用"
          unCheckedChildren="禁用"
          size="large"
          disabled
          defaultChecked
        />
      </div>
    </div>
  );
};
```

示例:

```tsx
import React from 'react';
import { Switch } from 'svl-design';

export default () => {
  return (
    <div>
      <Switch size="small" defaultChecked />
      <br />
      <Switch defaultChecked />
      <br />
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    </div>
  );
};
```

#### 参数说明

| 属性 | 说明                                                                                 | 类型 | 默认值  | 是否必传 | 版本     |
| ---- | ------------------------------------------------------------------------------------ | ---- | ------- | -------- | -------- |
| size | 继承自[Switch size](https://4x.ant.design/components/switch-cn/#Switch),新增 `large` | -    | default | -        | `0.0.12` |

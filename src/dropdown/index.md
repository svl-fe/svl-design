---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 导航
  order: 2
toc: false
---

## Dropdown 下拉菜单

示例:

```tsx
import React from 'react';
import { Menu } from 'antd';
import { Dropdown } from 'svl-design';

export default () => {
  return (
    <div>
      <Dropdown.Button
        type="primary"
        overlay={
          <Menu>
            <Menu.Item key="1">Submit and continue</Menu.Item>
            <Menu.Item key="2">Submit and 2</Menu.Item>
          </Menu>
        }
      >
        Submit
      </Dropdown.Button>
    </div>
  );
};
```

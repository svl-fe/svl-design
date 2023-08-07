---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 反馈
  order: 5
toc: false
---

## Popconfirm 气泡确认框

示例:

```tsx
import React from 'react';
import { Button } from 'antd';
import { Popconfirm } from 'svl-design';

export default () => {
  return (
    <div>
      <Popconfirm
        // icon={null}
        title="Are you sure to delete this task?"
        titleName="test"
        // onConfirm={confirm}
        // onCancel={cancel}
        okText="删除"
        cancelText="取消"
      >
        <Button type="primary">删除</Button>
      </Popconfirm>
    </div>
  );
};
```

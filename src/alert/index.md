---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 反馈
  order: 5
---

## Alert 警告提示

示例:

```tsx
import React from 'react';
import { Space } from 'antd';
import { Alert } from 'svl-design';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert closable showIcon message="提示文案，常规提示" type="info" />
      <Alert showIcon message="提示文案，成功提示" type="success" />
      <Alert showIcon message="提示文案，预警提示" type="warning" />
      <Alert showIcon message="提示文案，失败提示" type="error" />
    </Space>
  );
};
```

---
nav:
  title: 组件
  path: /components
group:
  path: /components
  title: 反馈
  order: 4
---

## Modal 对话框

示例:

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { Modal } from 'svl-design';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开
      </Button>

      <Modal
        visible={visible}
        titleName="模态框标题"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>内容区....</p>
        <p>内容区...</p>
        <p>内容区...</p>
      </Modal>
    </div>
  );
};
```

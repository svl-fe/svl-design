---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 导航
  order: 2
---

## Steps 步骤条

示例:

```tsx
import React from 'react';
import { Menu } from 'antd';
import { Steps } from 'svl-design';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Step } = Steps;

export default () => {
  return (
    <Steps current={1} size="default">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
      <Step
        title="In Progress"
        status="error"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a descriptionss." />
    </Steps>
  );
};
```

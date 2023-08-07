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
    <>
      <h3>small steps</h3>
      <Steps current={1} size="small">
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step
          title="In Progress"
          status="error"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a descriptionss." />
      </Steps>
      <h3>default steps</h3>
      <Steps current={1} size="default">
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step
          title="In Progress"
          status="error"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a descriptionss." />
      </Steps>
      <h3>large steps</h3>
      <Steps current={1} size="large">
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step
          title="In Progress"
          status="error"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a descriptionss." />
      </Steps>
    </>
  );
};
```

---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 反馈
  order: 6
toc: false
---

## PageDrawer 抽屉

示例:

```tsx
import { Button } from 'antd';
import { useState } from 'react';
import { PageDrawer } from 'svl-design';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onOk = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        resolve();
        setVisible(false);
        setLoading(false);
      }, 3000);
    });
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开
      </Button>

      <PageDrawer
        loading={loading}
        visible={visible}
        titleName="页码抽屉"
        onClose={() => setVisible(false)}
        onOk={onOk}
        footer={null}
      >
        <p>内容区....</p>
        <p>内容区...</p>
        <p>内容区...</p>
      </PageDrawer>
    </div>
  );
};
```

#### 参数说明

| 属性       | 说明         | 类型                                         | 默认值 | 是否必传 | 版本 |
| ---------- | ------------ | -------------------------------------------- | ------ | -------- | ---- |
| titleName  | 标题名字     | string                                       |        | 否       |      |
| loading    | 载入状态     | boolean                                      |        | 否       |      |
| cancelText | 取消按钮文字 | string                                       | 取消   | 否       |      |
| okText     | 确认按钮文字 | string                                       | 完成   | 否       |      |
| onOk       | 点击确定回调 | (e: React.MouseEvent\<HTMLElement\>) => void |        | 否       |      |

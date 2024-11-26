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
import { Button, Modal, Tooltip } from 'antd';
import { useState } from 'react';
import { PageDrawer } from 'svl-design';

export default () => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
        open={visible}
        titleName="页码抽屉"
        onClose={() => setVisible(false)}
        onOk={onOk}
        footer={null}
      >
        <Tooltip title="提示区">内容提示</Tooltip>
        <div>
          <Button onClick={() => setModalVisible(true)}>模态框</Button>
        </div>
      </PageDrawer>
      <Modal
        open={modalVisible}
        title="模态框"
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
      >
        点击模态框蒙层
      </Modal>
    </div>
  );
};
```

#### 参数说明

| 属性           | 说明             | 类型                                         | 默认值 | 是否必传 | 版本 |
| -------------- | ---------------- | -------------------------------------------- | ------ | -------- | ---- |
| titleName      | 标题名字         | string                                       |        | 否       |      |
| loading        | 载入状态         | boolean                                      |        | 否       |      |
| cancelText     | 取消按钮文字     | string                                       | 取消   | 否       |      |
| okText         | 确认按钮文字     | string                                       | 完成   | 否       |      |
| onOk           | 点击确定回调     | (e: React.MouseEvent\<HTMLElement\>) => void |        | 否       |      |
| prevDisabled   | 前一页使能状态   | boolean                                      |        | 否       |      |
| nextDisabled   | 下一个使能状态   | boolean                                      |        | 否       |      |
| pagination     | 操作项           | React.ReactNode                              |        | 否       |      |
| handlePrevPage | 上一页           | () => void                                   |        | 否       |      |
| handleNextPage | 下一页           | () => void                                   |        | 否       |      |
| gotoDetail     | 下一页           | () => void                                   |        | 否       |      |
| showClose      | 是否显示关闭按钮 | boolean                                      |        | 否       |      |

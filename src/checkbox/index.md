---
nav:
  title: 组件
  path: /components
group:
  path: /components
  title: 反馈
  order: 4
---

## Checkbox 多选框

示例:

```tsx
import React, { useState } from 'react';
import { Checkbox } from 'svl-design';
import { Radio, Switch, Space, Tabs, Tooltip } from 'antd';

const CheckboxGroup = Checkbox.Group;
const { TabPane } = Tabs;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Checkbox>Check all</Checkbox>
      <br />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
      <br />
      <Checkbox disabled>disabled</Checkbox>
      <br />
      <Checkbox disabled checked>
        checked disabled
      </Checkbox>
      <br />
      <Space>
        <Switch defaultChecked />
        <Switch size="small" defaultChecked />
        <Switch defaultChecked disabled />
        <Switch size="small" defaultChecked disabled />
      </Space>
      <br />
      <Space>
        <Radio>未选中</Radio>
        <Radio defaultChecked>已选中</Radio>
        <Radio disabled>未选失效项</Radio>
        <Radio defaultChecked disabled>
          已经选失效项
        </Radio>
      </Space>
      <br />
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </>
  );
};
```

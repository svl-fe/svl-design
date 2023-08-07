---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据录入
  order: 3
toc: false
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
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Checkbox>Check all</Checkbox>
      <br />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
      <br />
      <Checkbox disabled>disabled</Checkbox>
      <br />
      <Checkbox disabled checked>
        checked disabled
      </Checkbox>
      <br />
    </>
  );
};
```

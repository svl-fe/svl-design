---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据录入
  order: 3
---

## Select 选择器

示例:

```tsx
import React, { useState } from 'react';
import { Select } from 'svl-design';

const { Option, OptGroup } = Select;

export default () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
        <OptGroup label="Manager">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </OptGroup>
        <OptGroup label="Engineer">
          <Option value="Yiminghe">yiminghe</Option>
        </OptGroup>
      </Select>
    </>
  );
};
```

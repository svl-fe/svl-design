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

## Cascader 级联选择

示例:

```tsx
import React, { useState } from 'react';
import { Cascader } from 'svl-design';

const { Option, OptGroup } = Cascader;

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

export default () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  return (
    <Cascader
      options={options}
      style={{ width: 200 }}
      onChange={handleChange}
      placeholder="Please select"
    />
  );
};
```

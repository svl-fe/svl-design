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

## TreeSelect 树选择

示例:

```tsx
import React, { useState } from 'react';
import { TreeSelect } from 'svl-design';

const { TreeNode } = TreeSelect;

export default () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
      >
        <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="leaf1" />
            <TreeNode value="leaf2" title="leaf2" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1">
            <TreeNode
              value="leaf3"
              title={<b style={{ color: '#08c' }}>leaf3</b>}
            />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </>
  );
};
```

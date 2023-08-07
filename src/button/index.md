---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 通用
  order: 0
toc: false
---

## Button 按钮

示例:

```tsx
import React from 'react';
import { Button } from 'svl-design';

export default () => {
  return (
    <div>
      <Button size="small">小按钮</Button>
      <Button type="primary" size="small">
        小按钮
      </Button>
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button size="large">大按钮</Button>
      <Button type="primary" size="large">
        大按钮
      </Button>
      <br />
      <br />
      <Button type="primary">按钮</Button>
      <Button type="dashed">按钮</Button>
      <Button>按钮</Button>
      <Button type="ghost">按钮</Button>
      <Button type="link">按钮</Button>
      <Button type="text">按钮</Button>
      <br />
      <br />
      <Button disabled type="primary">
        按钮
      </Button>
      <Button disabled type="dashed">
        按钮
      </Button>
      <Button disabled>按钮</Button>
      <Button disabled type="ghost">
        按钮
      </Button>
      <Button disabled type="link">
        按钮
      </Button>
      <Button disabled type="text">
        按钮
      </Button>
      <br />
      <br />
      <Button danger type="primary">
        按钮
      </Button>
      <Button danger type="dashed">
        按钮
      </Button>
      <Button danger>按钮</Button>
      <Button danger type="ghost">
        按钮
      </Button>
      <Button danger type="link">
        按钮
      </Button>
      <Button danger type="text">
        按钮
      </Button>
      <br />
      <br />
      <Button ghost type="primary">
        按钮
      </Button>
      <Button ghost type="dashed">
        按钮
      </Button>
      <Button ghost>按钮</Button>
      <Button ghost type="ghost">
        按钮
      </Button>
      <Button ghost type="link">
        按钮
      </Button>
      <Button ghost type="text">
        按钮
      </Button>
    </div>
  );
};
```

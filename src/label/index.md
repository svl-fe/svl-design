---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 4
toc: false
---

## Label 标签

示例:

```tsx
import React from 'react';
import { Space } from 'antd';
import { Label } from 'svl-design';

export default () => {
  return (
    <Space>
      <Space direction="vertical">
        <Label type="line" status="default" size="small">
          标签文本
        </Label>
        <Label type="line" status="success" size="small">
          标签文本
        </Label>
        <Label type="line" status="warning" size="small">
          标签文本
        </Label>
        <Label type="line" status="error" size="small">
          标签文本
        </Label>
      </Space>
      <Space direction="vertical">
        <Label type="face" status="default" size="middle">
          标签文本
        </Label>
        <Label type="face" status="success" size="middle">
          标签文本
        </Label>
        <Label type="face" status="warning" size="middle">
          标签文本
        </Label>
        <Label type="face" status="error" size="middle">
          标签文本
        </Label>
      </Space>
      <Space direction="vertical">
        <Label type="line" status="default" size="large">
          标签文本
        </Label>
        <Label type="ghost" status="success" size="large">
          标签文本
        </Label>
        <Label type="ghost" status="warning" size="large">
          标签文本
        </Label>
        <Label type="ghost" status="error" size="large">
          标签文本
        </Label>
        <Label visible={false} type="ghost" status="error" size="large">
          标签文本
        </Label>

        <Label closable type="ghost" status="error" size="large">
          标签文本
        </Label>
      </Space>
      <Space direction="vertical">
        <Label type="ghost" color="#0867FF">
          标签文本
        </Label>
        <Label type="ghost" color="#E6505C">
          标签文本
        </Label>
        <Label type="ghost" color="#FE893B">
          标签文本
        </Label>
        <Label type="ghost" color="#2A9D8F">
          标签文本
        </Label>
      </Space>
      <Space direction="vertical">
        <Label dot color="#0867FF" size="small">
          标签文本
        </Label>
        <Label dot color="#E6505C">
          标签文本
        </Label>
        <Label dot color="#FE893B">
          标签文本
        </Label>
        <Label dot color="#2A9D8F">
          标签文本
        </Label>
      </Space>
      <Space direction="vertical">
        <Label
          dot={{ show: true, color: '#2A9D8F' }}
          color="#969799"
          size="small"
        >
          标签文本
        </Label>
        <Label dot={{ show: true, color: '#2A9D8F' }} color="#E6505C">
          标签文本
        </Label>
        <Label dot={{ show: true, color: '#2A9D8F' }} color="#FE893B">
          标签文本
        </Label>
        <Label dot={{ show: true, color: '#2A9D8F' }} color="#2A9D8F">
          标签文本
        </Label>
      </Space>
    </Space>
  );
};
```

#### 参数说明

| 属性      | 说明                                                       | 类型                                           | 默认值    | 是否必传 | 版本     |
| --------- | ---------------------------------------------------------- | ---------------------------------------------- | --------- | -------- | -------- |
| type      | 类型                                                       | 'line' \| 'face' \| 'ghost'                    | 'line'    |          |          |
| size      | 标签大小                                                   | 'small' \| 'middle' \| 'large'                 | 'middle'  |          |          |
| status    | 标签状态                                                   | 'success' \| 'error' \| 'warning' \| 'default' | 'default' |          |          |
| className | 类名                                                       | string                                         | -         |          |          |
| style     | 样式                                                       | React.CSSProperties                            | -         |          |          |
| children  | 子组件                                                     | ReactNode                                      | -         |          |          |
| closable  | 标签是否可以关闭（点击默认关闭）                           | boolean                                        | false     |          |          |
| closeIcon | 自定义关闭按钮                                             | ReactNode                                      | -         |          |          |
| icon      | 设置图标                                                   | ReactNode                                      | -         |          |          |
| visible   | 是否显示标签                                               | boolean                                        | true      |          |          |
| onClose   | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e) => void                                    | -         |          |          |
| color     | 文字颜色 `backgroundColor` 根据文字颜色透明度 0.1          | hex 色值                                       | -         |          | `0.0.14` |
| dot       | 是否显示小圆点                                             | boolean \| `DotConfig`                         | false     |          | `0.0.14` |

> <b>Tips</b>: dot 存在时，Label background 则处于透明状态,字体颜色依旧可以通过 color 来控制 <br/> dot color 默认取文字颜色，dot 类型为 DotConfig 时，dot color 取 DotConfig['color']

```typescript
interface DotConfig {
  /** dot 是否显示 */
  show: boolean;
  /** dot 颜色 */
  color: '#2A9D8F';
}
```

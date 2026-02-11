---
title: AntdDragModal 可拖拽对话框
---

## AntdDragModal

`AntdDragModal`是基于`antd modal`封装的基础可拖拽对话框，并限制了`ant-modal-body`的最大高度（您依旧可以使用`classNames`去改动）

> 需要引入 `react-draggable` 使用，`npm install react-draggable`

### 基础使用

```jsx
import { AntdDragModal } from 'izid'
import { useState } from 'react'
import { Button } from 'antd'

export default () => {
    const [visible, setVisible] = useState(false)

    return <>
        <Button onClick={() => setVisible(value => !value)}>{visible ? '关闭' : '打开'}</Button>
        <AntdDragModal state={[visible, setVisible]}>
            {
                Array.from({ length: 50 }, _ => <p>按住标题栏拖动</p>)
            }
        </AntdDragModal>
    </>
}
```

## API

配置项继承[Antd Modal](https://ant-design.antgroup.com/components/modal-cn#api)

| 属性名            | 类型                 | 是否必填 | 说明                                        | 默认值 |
|:---------------|:-------------------|:-----|:------------------------------------------|:----|
| state          | [string, function] | 否    | `useState`创建的state，用于双向绑定显示状态             |     |
| draggableProps | object             | 否    | `react-draggable`下`Draggable`组件的更多`props` |     |
| titleStyles    | object             | 否    | 对话框`title`的父级盒子的样式                        |     |

### Modal.XXX

更多方法继承[Antd Modal](https://ant-design.antgroup.com/components/modal-cn#modalmethod)

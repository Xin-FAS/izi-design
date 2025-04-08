---
title: FAntdInput 输入框
---

## FAntdInput

这是一个有各种常见业务场景的Antd Input组件

### 双向绑定

```jsx
import { FAntdInput } from 'izid';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd'

export default () => {
    const state = useState();
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    const setHello = () => {
        state[1]('Hello World')
    }

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput state={state} ref={inputRef} />
        <p><Button type={'primary'} onClick={setHello}>Hello World</Button></p>
    </>;
}
```

### 搜索模式

使用F12打开控制台查看输出

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('触发搜索：', value)
    }

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Search state={state} onSearch={onSearch} />
    </>;
}
```

### 自动搜索

使用F12打开控制台查看输出

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('触发自动搜索：', value)
    }

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Search state={state} autoSearch onSearch={onSearch} />
    </>;
}
```

可以使用`debounceDuration`属性控制防抖时间，默认`500`（毫秒）

### 节流搜索

使用F12打开控制台查看输出

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('触发节流搜索：', value)
    }

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Search state={state} throttleDuration={2000} onSearch={onSearch} />
    </>;
}
```

* 使用`throttleDuration`属性控制防抖时间，默认`0`（毫秒）
* 使用`throttleTrailing`属性控制时间结束后是否再次搜索，默认`false`

### 数字输入框

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}
```

### 货币输入框

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}
```

### 百分比输入框

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}
```

### 密码输入框

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}
```

### 单次密码输入框

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}
```

### 文本框

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}
```

### 配合表单使用

在表单中方法使用同Antd Input，使用F12打开控制台查看输出

```jsx
import { FAntdInput } from 'izid';
import { useState } from 'react';
import { Form, Button } from 'antd'

export default () => {
    const onFinish = data => {
        console.log('表单提交：', data)
    }

    return <Form onFinish={onFinish}>
        <Form.Item label={'输入框'} name={'value'}>
            <FAntdInput />
        </Form.Item>
        <Form.Item>
            <Button type={'primary'} htmlType="submit">提交</Button>
        </Form.Item>
    </Form>;
}
```

>
你不能在表单中使用setState去修改表单域的值，详见：[FormItem](https://ant-design.antgroup.com/components/form-cn#formitem)

## API

### FAntdInput
配置项继承[Antd Input](https://ant-design.antgroup.com/components/input-cn#api)

#### Props

| 属性名   | 类型     | 是否必填  | 说明                      | 默认值 |
|:------|:-------|:------|:------------------------|:----|
| state | string | false | useState创建的state，用于双向绑定 |     |

### FAntdInput.Search
配置项继承[Antd Input.Search](https://ant-design.antgroup.com/components/input-cn#inputsearch)

#### Props

| 属性名              | 类型       | 是否必填  | 说明                      | 默认值   |
|:-----------------|:---------|:------|:------------------------|:------|
| state            | string   | false | useState创建的state，用于双向绑定 |       |
| autoSearch       | function | false | 输入时是否自动使用防抖搜索           |       |
| debounceDuration | number   | false | 开启autoSearch后，防抖时间      | 500   |
| throttleDuration | number   | false | 触发搜索事件时节流时间             | 0     |
| throttleTrailing | boolean  | false | 节流搜索时间结束后是否再次触发搜索       | false |

### FAntdInput.Number
配置项继承[Antd InputNumber](https://ant-design.antgroup.com/components/input-number-cn#api)

#### Props

| 属性名    | 类型                | 是否必填  | 说明                                 | 默认值   |
|:-------|:------------------|:------|:-----------------------------------|:------|
| state  | string            | false | useState创建的state，用于双向绑定            |       |
| mode   | `price` `percent` | false | `price`价格模式、`percent`百分比模式，出现固定的格式 |       |
| strict | boolean           | false | 严格限制，限制为正整数、步长为1、百分比模式下限制最大值100    | false |

### 其他FAntdInput.XXX

与Antd Input.XXX相同，[Antd Input](https://ant-design.antgroup.com/components/input-cn#api)

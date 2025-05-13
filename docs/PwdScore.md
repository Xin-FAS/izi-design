---
title: PwdScore 密码强度显示
---

## PwdScore

这是一个显示密码强度的显示组件，默认有五个等级(0-4)，可自定义等级

### 基础使用

```jsx
import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore />
        <PwdScore value={0} />
        <PwdScore value={1} />
        <PwdScore value={2} />
        <PwdScore value={3} />
        <PwdScore value={4} />
    </>
}
```

### 自定义强度

可以通过设置`scoreList`属性来渲染颜色和文字，根据`value`进行排序

```jsx
import { PwdScore } from 'izid'
import { useMemo, useState } from 'react'
import { Button } from 'antd'

export default () => {
    const [value, setValue] = useState()

    const scoreList = useMemo(() => [
        {
            color: '#a0133d',
            label: '非常弱',
            value: 11
        },
        {
            color: '#2f9715',
            label: '强',
            value: 13
        },
        {
            color: '#ffa500',
            label: '一般',
            value: 12
        },
    ], [])

    const changeScore = () => {
        if (value === undefined) return setValue(11)
        if (value === 13) return setValue(undefined)
        setValue(value + 1)
    }
    return <>
        <PwdScore
            value={value}
            scoreList={scoreList}
        />
        <Button onClick={changeScore}>调整强度</Button>
    </>
}
```

### 改变强度顺序

使用`reverse`调整渲染顺序

```jsx
import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore value={0} reverse />
        <PwdScore value={1} reverse />
        <PwdScore value={2} reverse />
        <PwdScore value={3} reverse />
        <PwdScore value={4} reverse />
    </>
}
```

### 配合表单自动计算

需要引入库`zxcvbn`使用，在表单中自动计算密码强度，并限制使用的密码强度不能为`非常弱`

```jsx
import { PwdScore, FAntdInput } from 'izid'
import { useState } from 'react'
import zxcvbn from 'zxcvbn'
import { Form, Button, Input, Flex } from 'antd'

export default () => {
    const [passwordScore, setPasswordScore] = useState()
    const [log, setLog] = useState({})
    const [password, setPassword] = useState('')

    const pwdChange = () => {
        if (!password) setPasswordScore(undefined)
        // 使用zxcvbn计算密码强度，范围0-4，如果有自定义强度的话需要手动修改
        else setPasswordScore(zxcvbn(password).score)
    }

    return <>
        <Form
            layout="vertical"
            onFinish={setLog}
        >
            <Form.Item
                name={'password'}
                label={<Flex align={'center'}>
                    <span>密码</span>
                    <PwdScore value={passwordScore} />
                </Flex>}
                rules={[
                    {
                        required: true,
                        message: '密码不能为空'
                    },
                    ({ getFieldValue }) => ({
                        validator (rule, value) {
                            if (!value || passwordScore >= 1) return Promise.resolve()
                            return Promise.reject('密码强度太弱')
                        },
                    }),
                ]}
            >
                <FAntdInput.Password state={[password, setPassword]} onChange={pwdChange} />
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType="submit">提交</Button>
            </Form.Item>
        </Form>
        提交数据：{JSON.stringify(log)}
    </>
}
```

## API

### Props

| 属性名          | 类型      | 是否必填  | 说明               | 默认值                                                                                                                                                                                                                      |
|:-------------|:--------|:------|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value        | number  | false | 设置密码强度，默认取值范围0-4 |                                                                                                                                                                                                                          |
| scoreList    | array   | false | 设置自定义渲染          | [{"color":"#a0133d","label":"非常弱","value":0},{"color":"#f7e84d","label":"较弱","value":1},{"color":"#ffa500","label":"一般","value":2},{"color":"#1677ff","label":"较强","value":3},{"color":"#2f9715","label":"强","value":4}] |
| defaultColor | color   | false | 设置默认底色           | '#e2e2e2'                                                                                                                                                                                                                |
| reverse      | boolean | false | 调整强度显示顺序         | false                                                                                                                                                                                                                    |


---
title: FLocalStore 加密存储
---

## FLocalStore

`FLocalStore`对`localStorage`进行了封装，用于在本地安全地存取敏感数据。 为了避免`key`暴露，会先对`key`进行`不可逆散列加密`
，同时使用`随机盐`+`PBKDF2`生成密钥，对存储的内容进行加密。 优点如下：

1. 存储和取出时，不需要手动转换`JSON`了
2. 在`localStorage`中只能看到加密后的`key`和`value`，数据更加安全
3. 可设置数据过期时间
4. 可配置不存入本地，当作全局cache使用

> 需要引入 `crypto-js` 使用，`npm install crypto-js`

### 基础使用

将数据存储到`localStorage`，请前往控制台查看`localStorage`和`console`

```jsx
import { FLocalStore } from 'izid'
import { Button, Space } from 'antd'

export default () => {
    const setLocalData = (mode) => {
        if (mode === 'demo1') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: {
                    name: 'fas'
                }
            })
        }
        if (mode === 'demo2') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: 'fas,duration5000',
                duration: 5 * 1000
            })
        }
        if (mode === 'demo3') {
            FLocalStore.removeItem('demoKey')
        }
        if (mode === 'demo4') {
            console.log(FLocalStore.getItem('demoKey'))
        }
    }

    return <Space>
        <Button onClick={() => setLocalData('demo1')}>存储内容</Button>
        <Button onClick={() => setLocalData('demo2')}>存储内容（五秒过期）</Button>
        <Button onClick={() => setLocalData('demo3')}>清空存储</Button>
        <Button onClick={() => setLocalData('demo4')}>打印存储内容</Button>
    </Space>
}
```

### 临时存储

配置`local`为`false`，将数据存储到`全局Map`，浏览器刷新后数据失效，请前往控制台查看`console`

```jsx
import { FLocalStore } from 'izid'
import { Button, Space } from 'antd'

export default () => {
    const setLocalData = (mode) => {
        if (mode === 'demo1') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: {
                    name: 'fas'
                },
                local: false
            })
        }
        if (mode === 'demo2') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: 'fas,duration5000',
                duration: 5 * 1000,
                local: false
            })
        }
        if (mode === 'demo3') {
            FLocalStore.removeItem('demoKey')
        }
        if (mode === 'demo4') {
            console.log(FLocalStore.getItem('demoKey'))
        }
    }

    return <Space>
        <Button onClick={() => setLocalData('demo1')}>存储内容</Button>
        <Button onClick={() => setLocalData('demo2')}>存储内容（五秒过期）</Button>
        <Button onClick={() => setLocalData('demo3')}>清空存储</Button>
        <Button onClick={() => setLocalData('demo4')}>打印存储内容</Button>
    </Space>
}
```

## Method

### FLocalStore.setItem

用于将数据加密存储到`Map`或`localStorage`，`setItem`需要传入一个对象`options`，无返回值

#### options
| 参数名      | 类型               | 是否必填 | 说明                                          | 默认值  |
|:---------|:-----------------|:-----|:--------------------------------------------|:-----|
| key      | string           | 是    | 存储的key                                      |      |
| value    | string \| object | 是    | 存储的内容                                       |      |
| duration | number           | 否    | 存储的有效期（毫秒），-1表示一直有效                         | -1   |
| local    | boolean          | 否    | 是否存入`localStorage`，`false`则为存入`Map`当作临时数据使用 | true |

### FLocalStore.getItem

用于取出存储的数据，`getItem`只需要传入`key`即可，返回`setItem`存入的`value`，数据为空或过期时返回`undefined`

> 注意事项
> 1. 如果传入多个key时，返回值为数组
> 2. 当`Map`数据和`localStorage`都存在数据时，以`Map`数据为优先

| 参数名      | 类型              | 是否必填 | 说明              | 默认值  |
|:---------|:----------------|:-----|:----------------|:-----|
| key      | string \| array | 是    | 存储的key，传入数组获取多个 |      |

### FLocalStore.removeItem

用于删除存储的数据，`removeItem`只需要传入`key`即可，无返回值

| 参数名      | 类型               | 是否必填 | 说明                | 默认值  |
|:---------|:-----------------|:-----|:------------------|:-----|
| key      | string \| array           | 是    | 存储的key，传入数组删除多个 |      |

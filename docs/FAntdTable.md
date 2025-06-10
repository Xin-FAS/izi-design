---
title: FAntdTable 表格
---

## FAntdTable

`FAntdTable`是对Antd Table的封装，只需要有api和columns属性就能快速渲染出一个分页表格，对Antd Table原生改动如下：

* 内置`api`请求，可使用`ref`控制请求
* `columns`不存在`key`时，如果`dataIndex`有值，则自动将`dataIndex`当作`key`
* `checkboxState`和`radioState`能更快的使用多选/单选
* 有一套默认的字段映射、初始分页配置，见基础使用

### 基础使用

```jsx
import { FAntdTable } from 'izid'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
    />
}
```

注意以下规定：

1. 分页参数为current、pageSize
2. `api`返回的是接口数据，而不是`response`
3. 成功状态为`code==='0'`
4. 总数据条数字段为`total`
5. 数据字段为`data`

### 调整默认规则

假设接口返回response对象，分页参数为pageSearch: { limit, page }，返回体里面是size和records，成功条件为code==='OK'

```jsx
import { FAntdTable } from 'izid'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            status: 200,
            data: {
                code: 'OK',
                size: 21,
                records: Array.from({ length: 21 }, (_, index) => ({
                    name: 'Xin',
                    more: `这是第${index + 1}条数据`
                })).slice((current - 1) * pageSize, current * pageSize)
            }
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
        getApiData={data => data.data}
        reqeustPageConfig={(current, pageSize) => ({ pageSearch: { page: current, limit: pageSize } })}
        mapperOptions={{
            total: 'size',
            data: 'records'
        }}
        successValid={data => data.code === 'OK'}
    />
}
```

### 手动请求

```jsx
import { FAntdTable } from 'izid'
import { useRef, useState } from 'react'
import { Button, Space } from 'antd'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const tableRef = useRef()
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    // 操作表格数据
    const handleTableRef = fnName => {
        tableRef.current?.[fnName]()
    }

    return <>
        <Space style={{ marginBottom: '10px' }}>
            <Button onClick={() => handleTableRef('init')}>重置页数后获取数据</Button>
            <Button onClick={() => handleTableRef('reset')}>重置条数/页数后获取数据</Button>
            <Button onClick={() => handleTableRef('reload')}>刷新当前页数据</Button>
        </Space>
        <FAntdTable
            ref={tableRef}
            api={TableDataAPI}
            columns={columns}
            autoInit={false}
        />
    </>
}
```

### 多选快速绑定

```jsx
import { FAntdTable } from 'izid'
import { useState } from 'react'
import { Radio } from 'antd'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    const [selectedRows, setSelectedRows] = useState([])
    return <>
        {JSON.stringify(selectedRows)}
        <FAntdTable
            checkboxState={[selectedRows, setSelectedRows]}
            api={TableDataAPI}
            columns={columns}
        />
    </>
}
```

### 单选快速绑定

```jsx
import { FAntdTable } from 'izid'
import { useState } from 'react'
import { Radio } from 'antd'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    const [selectedRows, setSelectedRows] = useState({})
    return <>
        {JSON.stringify(selectedRows)}
        <FAntdTable
            radioState={[selectedRows, setSelectedRows]}
            api={TableDataAPI}
            columns={columns}
        />
    </>
}
```

### 过滤表格数据

使用`filter`过滤掉第五条数据

```jsx
import { FAntdTable } from 'izid'
import { useState } from 'react'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
        filter={r => r.more !== '这是第5条数据'}
    />
}
```

### 拦截表格请求

使用`requestValid`拦截第二页的请求

```jsx
import { FAntdTable } from 'izid'
import { useState } from 'react'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
        requestValid={params => params.current !== 2}
    />
}
```

### 请求添加额外参数

```jsx
import { FAntdTable, FAntdInput } from 'izid'
import { useRef, useState } from 'react'
import { Button, Space } from 'antd'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const tableRef = useRef()
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]


    const [name, setName] = useState()
    // 操作表格数据
    const handleTableRef = fnName => {
        tableRef.current?.[fnName]({
            name
        })
    }

    const [sendParams, setSendParams] = useState()

    return <>
        <Space style={{ marginBottom: '10px' }}>
            <Button onClick={() => handleTableRef('init')}>重置页数后获取数据</Button>
            <Button onClick={() => handleTableRef('reset')}>重置条数/页数后获取数据</Button>
            <Button onClick={() => handleTableRef('reload')}>刷新当前页数据</Button>
        </Space>
        <FAntdInput state={[name, setName]} placeholder={'输入手动请求额外参数'} />
        <p>{JSON.stringify(sendParams)}</p>
        <FAntdTable
            ref={tableRef}
            api={TableDataAPI}
            columns={columns}
            requestValid={params => {
                setSendParams(params)
                return true
            }}
        />
    </>
}
```

### 获取表格信息

```jsx
import { FAntdTable } from 'izid'
import { useRef, useState } from 'react'
import { Button } from 'antd'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const tableRef = useRef()
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '说明',
            dataIndex: 'more',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    // 表格信息
    const [tableInfo, setTableInfo] = useState()
    const getTableInfo = () => {
        setTableInfo(tableRef.current?.getInfo())
    }

    return <>
        <Button onClick={getTableInfo}>获取表格信息</Button>
        <p>{JSON.stringify(tableInfo)}</p>
        <FAntdTable
            ref={tableRef}
            api={TableDataAPI}
            columns={columns}
        />
    </>
}
```

### 更多例子

可参考[Antd Table](https://ant-design.antgroup.com/components/table-cn#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA)

## API

配置项继承[Antd Table](https://ant-design.antgroup.com/components/table-cn#api)

### Props

| 属性名               | 类型                            | 是否必填 | 说明                                                                                           | 默认值                                            |
|-------------------|-------------------------------|------|----------------------------------------------------------------------------------------------|------------------------------------------------|
| api               | apiData => Promise            | 是    | 获取表格数据的接口函数                                                                                  |                                                |
| apiData           | object                        | 否    | api函数请求参数，默认为`apiData` + `requestPageConfig`                                                 |                                                |
| checkboxState     | array                         | 否    | 用于快速建立多选绑定关系                                                                                 |                                                |
| radioState        | array                         | 否    | 用于快速建立单选绑定关系                                                                                 |                                                |
| filter            | itemData => boolean           | 否    | 过滤表格数据，同`Array.filter`                                                                       | data => true                                   |
| getApiData        | response => object            | 否    | 返回后端接口响应数据，而不是浏览器response（如果接口返回是response，建议去调整响应拦截器，无法调整拦截器可以改为`response => response.data`） | response => response                           |
| requestValid      | requestArgs => boolean        | 否    | 是否进行请求，可用于在不满足请求条件时拦截请求，`requestArgs`接口请求参数                                                  | requestArgs => true                            |
| requestPageConfig | (current, pageSize) => object | 否    | 返回传递接口的分页配置，默认`pageSearch: { limit, page }`参数，current当前页，pageSize当前条数                        | (current, pageSize) => ({ current, pageSize }) |
| successValid      | response => boolean           | 否    | 判断请求是否成功，默认判断响应数据中的`code`为字符串`0`                                                             | data => data.code === '0'                      |
| mapperOptions     | object                        | 否    | 表格数据映射字段名称                                                                                   | { total: 'total', data: 'data' }               |
| initPageSize      | number                        | 否    | 初始表格数据条数                                                                                     | 10                                             |
| initCurrent       | number                        | 否    | 初始表格数据页数                                                                                     | 1                                              |
| autoInit          | boolean                       | 否    | 是否自动获取表格数据                                                                                   | true                                           |

### Ref

| 方法名          | 说明                                                              | 类型                                                 |
|--------------|-----------------------------------------------------------------|----------------------------------------------------|
| getTableData | 组件暴露的查询方法，高度自定义，可传入一个对象，传入data参数会覆盖apiData，需要携带其他参数请使用otherData | `({ current、pageSize、data、otherData }) => Promise` |
| init         | 根据当前条数、查询条件获取初始页数的数据，可传入一个对象当作额外查询数据，一般用于查询                     | `otherData => Promise`                             |
| reset        | 使用初始条数、初始页数、空查询条件获取数据，可传入一个对象当作查询条件，一般用于重置                      | `otherData => Promise`                             |
| reload       | 刷新当前页面数据，可传入一个对象当作查询条件                                          | `otherData => Promise`                             |
| getInfo      | 获取当前表格请求数据                                                      | `() => ({ current, pageSize, data })`              |

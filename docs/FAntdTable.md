---
title: FAntdTable 表格
---

## FAntdTable

`FAntdTable`是对Antd Table的封装，只需要有api和columns属性就能快速渲染出一个分页表格，具体改动如下：

* 内置pagination配置项，初始包含5, 10, 20, 50分页数
* columns不存在key时，如果dataIndex有值，则自动将dataIndex当作key
* 自动使用`code`判断接口状态，成功默认值为字符串`0`，可使用`successValid`自定成功条件
* 自动使用`count`当总数据条数，`data`当分页数据列表，可使用`mapperOptions`配置属性名
* 默认`api`返回的`promise`值为后端返回数据而不是`Response`对象，如果`api`返回`Response`对象，则可以使用`getApiData`指定为接口数据

### 基础使用

```jsx
import { FAntdTable } from 'izid'
import { Button } from 'antd'

// 模拟接口
const TableDataAPI = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            }))
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

### 手动请求

```jsx
import { FAntdTable } from 'izid'
import { useRef, useState } from 'react'
import { Button, Space, Spin } from 'antd'

// 模拟接口
const TableDataAPI = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: `这是第${index + 1}条数据`
            }))
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

    // 获取表格数据
    const handleTableRef = fnName => {
        tableRef.current?.[fnName]()
    }

    return <>
        <Space style={{ marginBottom: '10px' }}>
            <Button onClick={() => handleTableRef('initPageSearch')}>获取数据</Button>
            <Button onClick={() => handleTableRef('resetPageSearch')}>重置数据</Button>
            <Button onClick={() => handleTableRef('getTableData')}>刷新数据</Button>
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

## API

配置项继承[Antd Table](https://ant-design.antgroup.com/components/table-cn#api)

### Props

| 属性名               | 类型                            | 是否必填 | 说明                                                                                           | 默认值                                                                         |
|-------------------|-------------------------------|------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| api               | apiData => Promise            | 是    | 获取表格数据的接口函数                                                                                  |                                                                             |
| apiData           | object                        | 否    | api函数请求参数                                                                                    |                                                                             |
| filter            | itemData => boolean           | 否    | 过滤表格数据                                                                                       |                                                                             |
| getApiData        | response => object            | 否    | 返回后端接口响应数据，而不是浏览器response（如果接口返回是response，建议去调整响应拦截器，无法调整拦截器可以改为`response => response.data`） | response => response                                                        |
| requestValid      | requestArgs => boolean        | 否    | 是否进行请求，可用于在不满足请求条件时拦截请求，`requestArgs`接口请求参数                                                  | requestArgs => true                                                         |
| requestPageConfig | (current, pageSize) => object | 否    | 返回传递接口的分页配置，默认`pageSearch: { limit, page }`参数，current当前页，pageSize当前条数                        | (current, pageSize) => ({ pageSearch: { limit: pageSize, page: current } }) |
| successValid      | response => boolean           | 否    | 判断请求是否成功，默认判断响应数据中的`code`为字符串`0`                                                             | data => data.code === '0'                                                   |
| mapperOptions     | object                        | 否    | 表格数据映射字段名称                                                                                   | { total: 'count', data: 'data' }                                            |
| initPageSize      | number                        | 否    | 初始表格数据条数                                                                                     | 10                                                                          |
| initCurrent       | number                        | 否    | 初始表格数据页数                                                                                     | 1                                                                           |
| autoInit          | boolean                       | 否    | 是否自动获取表格数据                                                                                   | true                                                                        |

### Ref

| 方法名             | 说明                                                                                                            |
|-----------------|---------------------------------------------------------------------------------------------------------------|
| getTableData    | 获取表格数据，直接调用可以获取当前页当前查询条件数据，可传入一个对象，包含page、limit、data、moreData参数，传入data参数会覆盖apiData，需要传入更多参数请使用moreData，一般用于刷新 |
| initPageSearch  | 根据当前条数、查询条件获取初始页数的数据，可传入一个对象当作额外查询数据，一般用于查询                                                                   |
| resetPageSearch | 使用初始条数、初始页数、空查询条件获取数据，可传入一个对象当作查询条件，一般用于重置                                                                    |

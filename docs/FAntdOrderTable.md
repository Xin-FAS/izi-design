---
title: FAntdOrderTable 订单表格
---

## FAntdOrderTable

这是一个基于[FAntdTable](/components/f-antd-table)组件写的订单表格，原理是使用了`antd table`的自定义`components`
属性，这个订单表格在每一项数据的头部增加了数据显示和操作空间

### 基础使用

```jsx
import { FAntdOrderTable } from 'izid'
import { Space } from 'antd'

// 模拟接口
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                orderInfo: {
                    hotelName: `杭州西湖XXXX酒店${index + 1}号`,
                    houseType: '高级大床房',
                    breakfastType: '双早',
                    startDate: '2025/05/15',
                    endDate: '2025/05/16',
                    dayCount: 1,
                    roomCount: 1
                },
                contactInfo: {
                    checkName: '李四',
                    contactName: '王五'
                },
                payInfo: {
                    paymentAmount: 200,
                    projectedIncome: 200
                },
                systemOrderId: '1234567890',
                createDate: '2025-05-14 15:45:05',
                orderStatus: '待发货',
                more: `这是第${index + 1}条数据`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '订单信息',
            dataIndex: 'orderInfo',
            render (orderInfo) {
                return <>
                    <div>{orderInfo.hotelName}</div>
                    <div>{orderInfo.houseType}/{orderInfo.breakfastType}</div>
                    <div>{`${orderInfo.startDate}~${orderInfo.endDate} ${orderInfo.dayCount}晚 ${orderInfo.roomCount}间`}</div>
                </>
            }
        },
        {
            title: '联系信息',
            dataIndex: 'contactInfo',
            render (contactInfo) {
                return <>
                    <div>入住人：{contactInfo.checkName}</div>
                    <div>联系人：{contactInfo.contactName}</div>
                </>
            }
        },
        {
            title: '支付信息',
            dataIndex: 'payInfo',
            render (payInfo) {
                return <>
                    <div>支付金额：¥{payInfo.paymentAmount}</div>
                    <div>预计收入：¥{payInfo.projectedIncome}</div>
                </>
            }
        },
        {
            title: '订单状态',
            dataIndex: 'orderStatus',
        },
        {
            title: '操作',
            key: 'active',
            render: () => <Space direction="vertical">
                <a>拒单</a>
                <a>确认发货</a>
                <a>复制订单</a>
            </Space>
        }
    ]
    const headerRender = [
        {
            label: '系统订单号',
            render: row => row.systemOrderId
        },
        {
            label: '下单时间',
            render: row => row.createDate
        },
    ]
    const headerOptions = row => <Space>
        <a>录入</a>
        <a>采购</a>
        <a>备注</a>
        <a>详情</a>
        <a>日志</a>
    </Space>

    return <FAntdOrderTable
        api={TableDataAPI}
        columns={columns}
        headerRender={headerRender}
        headerOptions={headerOptions}
    />
}
```

## API

其他配置项继承[FAntdTable](/components/f-antd-table#api)

| 属性名           | 类型                                      | 是否必填  | 说明        | 默认值 |
|:--------------|:----------------------------------------|:------|:----------|:----|
| headerRender  | {label: string, render: row => React}[] | false | 头部数据的显示区域 |     |
| headerOptions | row => React                            | false | 头部数据的操作区域 |     |

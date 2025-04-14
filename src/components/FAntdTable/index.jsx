import { Table } from 'antd';
import { useEffect, useState, forwardRef, useImperativeHandle, useRef, useCallback } from 'react';

const FAntdTable = forwardRef(
    (
        {
            api,
            apiData,
            filter = data => true,
            requestValid = requestArgs => true,
            renderPageConfig = (current, pageSize) => ({ current, pageSize }),
            successValid = data => data.code === '0',
            mapperOptions = {
                total: 'count',
                data: 'data'
            },
            initPageSize = 10,
            initCurrent = 1,
            autoInit = true,
            getApiData = response => response,
            ...args
        },
        ref,
    ) => {
        const [pageSize, setPageSize] = useState(initPageSize);
        const [current, setCurrent] = useState(initCurrent);
        const [total, setTotal] = useState(0);
        const [loading, setLoading] = useState(false);
        const [tableData, setTableData] = useState([]);

        const getTableData = useCallback(({
            current,
            pageSize,
            data = apiData,
            otherData = {}
        } = {}) => {
            const requestArgs = Object.assign(
                {},
                renderPageConfig(current, pageSize),
                data,
                otherData
            )
            if (!requestValid(requestArgs)) return;
            setLoading(true);
            // 记录下请求时未改变的页码
            const _current = current;
            const _pageSize = pageSize;
            return api(requestArgs).then(res => {
                const data = getApiData(res)
                if (
                    successValid(data) &&
                    _current === current &&
                    _pageSize === pageSize
                ) {
                    let tableData = data[mapperOptions.data]
                    // 使用filter过滤数据
                    if (tableData && tableData.length) tableData = tableData.filter(filter);
                    // 设置表格总条数
                    setTotal(res[mapperOptions.total]);
                    // 设置表格数据
                    setTableData(tableData ?? []);
                    // 更新页码
                    setCurrent(current);
                    setPageSize(pageSize);
                }
            }).finally(() => {
                setLoading(false)
            });
        }, [apiData, api, getApiData, requestValid, renderPageConfig, successValid, mapperOptions, filter])
        // 还原页数查询
        const initPageSearch = useCallback(otherData => getTableData({
            current: initCurrent,
            pageSize,
            otherData
        }), [initCurrent, pageSize])
        // 重置查询（还原页数和条数和空查询）
        const resetPageSearch = useCallback(otherData => getTableData({
            current: initCurrent,
            pageSize: initPageSize,
            data: {},
            otherData,
        }), [initCurrent, initPageSize])

        const tableRef = useRef()
        useImperativeHandle(
            ref,
            () => {
                return {
                    getTableData,
                    initPageSearch,
                    resetPageSearch,
                    nativeElement: tableRef.current?.nativeElement,
                    scrollTo: tableRef.current?.scrollTo,
                };
            },
            [current, pageSize, apiData, tableRef],
        );
        useEffect(() => {
            autoInit && getTableData();
        }, []);
        return <Table
            ref={tableRef}
            loading={loading}
            dataSource={tableData}
            {...args}
            columns={(args.columns ?? []).map(r => {
                if (r.key === undefined) r.key = r.dataIndex
                return r
            })}
            pagination={{
                showSizeChanger: true,
                current,
                pageSize,
                total,
                pageSizeOptions: [5, 10, 20, 50],
                ...(args.pagination ?? {}),
                onChange: (page, limit) => {
                    getTableData({
                        page,
                        limit,
                    })
                    args?.pagination?.onChange && args.pagination.onChange(page, limit)
                },
            }}
        />
    },
);
export default FAntdTable

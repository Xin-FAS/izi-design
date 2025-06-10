import { Table } from 'antd';
import { useEffect, useState, forwardRef, useImperativeHandle, useRef, useCallback, useMemo } from 'react';

const FAntdTable = forwardRef(
    (
        {
            api,
            apiData,
            checkboxState,
            radioState,
            filter = data => true,
            getApiData = response => response,
            requestValid = requestArgs => true,
            requestPageConfig = (current, pageSize) => ({ current, pageSize }),
            successValid = data => data.code === '0',
            mapperOptions = {
                total: 'total',
                data: 'data'
            },
            initPageSize = 10,
            initCurrent = 1,
            autoInit = true,
            rowKey = data => data,
            ...args
        },
        ref,
    ) => {
        const [configPageSize, setConfigPageSize] = useState(initPageSize);
        const [configCurrent, setConfigCurrent] = useState(initCurrent);
        const [total, setTotal] = useState(0);
        const [loading, setLoading] = useState(false);
        const [tableData, setTableData] = useState([]);

        const getTableData = useCallback(({
            current = configCurrent,
            pageSize = configPageSize,
            data = apiData,
            otherData = {}
        } = {}) => {
            const requestArgs = Object.assign(
                {},
                requestPageConfig(current, pageSize),
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
                    // 使用filter过滤数据
                    const tableData = (data[mapperOptions.data] ?? []).filter(filter)
                    // 设置表格总条数
                    setTotal(res[mapperOptions.total]);
                    // 设置表格数据
                    setTableData(tableData);
                    // 更新页码
                    setConfigCurrent(current);
                    setConfigPageSize(pageSize);
                }
            }).finally(() => {
                setLoading(false)
            });
        }, [apiData, api, getApiData, requestValid, requestPageConfig, successValid, mapperOptions, filter, args.rowKey])
        // 还原页数查询
        const init = useCallback(otherData => getTableData({
            current: initCurrent,
            pageSize: configPageSize,
            otherData
        }), [initCurrent, configPageSize, getTableData])
        // 重置查询（还原页数和条数和空查询）
        const reset = useCallback(otherData => getTableData({
            current: initCurrent,
            pageSize: initPageSize,
            data: {},
            otherData,
        }), [initCurrent, initPageSize, getTableData])
        // 刷新当前页数查询
        const reload = useCallback(otherData => getTableData({ otherData }), [configCurrent, configPageSize, apiData])

        const tableRef = useRef()
        useImperativeHandle(
            ref,
            () => {
                return {
                    getTableData,
                    init,
                    reload,
                    reset,
                    nativeElement: tableRef.current?.nativeElement,
                    scrollTo: tableRef.current?.scrollTo,
                    getInfo: () => ([tableData, configCurrent, configPageSize])
                };
            },
            [getTableData, init, reload, reset, tableRef, tableData, configCurrent, configPageSize],
        );

        const rowSelection = useMemo(() => {
            if (checkboxState || radioState) {
                const state = checkboxState ?? radioState
                return {
                    type: checkboxState ? 'checkbox' : 'radio',
                    onChange (...args) {
                        state[1](args[0])
                        args?.rowSelection?.onChange(...args)
                    }
                }
            }
        }, [checkboxState, radioState, args.rowSelection, args.rowKey]);

        useEffect(() => {
            autoInit && getTableData();
        }, []);
        return <Table
            ref={tableRef}
            loading={loading}
            dataSource={tableData}
            {...args}
            rowSelection={rowSelection}
            rowKey={rowKey}
            columns={args.columns?.map(r => (r.key = r.key ?? r.dataIndex, r))}
            pagination={args?.pagination === false ? false : {
                showSizeChanger: true,
                current: configCurrent,
                pageSize: configPageSize,
                total,
                pageSizeOptions: [5, 10, 20, 50],
                ...args?.pagination,
                onChange (current, pageSize) {
                    getTableData({
                        current,
                        pageSize,
                    })
                    args?.pagination?.onChange(current, pageSize)
                },
            }}
        />
    },
);
export default FAntdTable

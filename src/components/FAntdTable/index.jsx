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
            pagination: basePagination = {},
            columns: baseColumns = [],
            rowSelection: baseRowSelection,
            dataSource: baseDataSource,
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
            // 使用静态数据不需要调用获取接口
            const isStaticData = !api && baseDataSource
            if (isStaticData) return Promise.resolve()
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
        }, [apiData, api, getApiData, requestValid, requestPageConfig, successValid, mapperOptions, filter, baseDataSource])
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
        const reload = useCallback(otherData => getTableData({ otherData }), [getTableData])
        // 获取当前页信息
        const getInfo = useCallback(() => ({
                tableData,
                configCurrent,
                configPageSize,
                selected: args?.rowKey ? tableData.filter(r => {
                    if (radioState) return r[args.rowKey] === radioState[0]
                    if (checkboxState) {
                        const rowKeys = checkboxState[0]
                        return rowKeys.includes(r[args.rowKey])
                    }
                }): undefined
            }),
            [
                tableData,
                configCurrent,
                configPageSize,
                checkboxState,
                radioState
            ])
        // 获取当前选中的全部数据
        const getSelected = useCallback(() => getInfo().selected, [getInfo])

        const tableRef = useRef()
        useImperativeHandle(
            ref,
            () => {
                return {
                    getTableData,
                    init,
                    reload,
                    reset,
                    getInfo,
                    getSelected,
                    nativeElement: tableRef.current?.nativeElement,
                    scrollTo: tableRef.current?.scrollTo,
                };
            },
            [getTableData, init, reload, reset, tableRef, getInfo],
        );
        // 单选/多选
        const rowSelection = useMemo(() => {
            if (checkboxState) return {
                type: 'checkbox',
                selectedRowKeys: checkboxState[0],
                ...(baseRowSelection ?? {}),
                onChange (...changeArgs) {
                    checkboxState[1](changeArgs[0])
                    baseRowSelection?.onChange?.(...changeArgs)
                }
            }
            if (radioState) return {
                type: 'radio',
                selectedRowKeys: [radioState[0]],
                ...(baseRowSelection ?? {}),
                onChange (...changeArgs) {
                    radioState[1](changeArgs[0][0])
                    baseRowSelection?.onChange?.(...changeArgs)
                }
            }
            return baseRowSelection
        }, [checkboxState, radioState, baseRowSelection]);
        useEffect(() => {
            if (autoInit && !baseDataSource) getTableData()
        }, []);
        useEffect(() => {
            if (baseDataSource) setTableData(baseDataSource)
        }, [baseDataSource]);
        return <Table
            ref={tableRef}
            loading={loading}
            dataSource={baseDataSource ?? tableData}
            {...args}
            rowSelection={rowSelection}
            columns={baseColumns?.map(r => (r.key = r.key ?? r.dataIndex, r))}
            pagination={basePagination === false ? false : {
                showSizeChanger: true,
                current: configCurrent,
                pageSize: configPageSize,
                total,
                pageSizeOptions: [5, 10, 20, 50],
                ...basePagination,
                onChange (current, pageSize) {
                    getTableData({
                        current,
                        pageSize,
                    })
                    basePagination?.onChange(current, pageSize)
                    // 清空选中
                    if (radioState) radioState[1](undefined)
                    if (checkboxState) checkboxState[1]([])
                },
            }}
        />
    },
);
export default FAntdTable

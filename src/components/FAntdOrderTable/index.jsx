import { useRef, forwardRef } from 'react'
import styles from './index.module.scss'
import { FAntdTable } from 'izid'

const FAntdOrderTable = forwardRef(({
    headerRender,
    headerOptions,
    ...tableArgs
}, ref) => {
    const MyTable = (props) => (
        <table
            {...props}
            style={{
                ...props.style,
                borderCollapse: 'collapse',
            }}
        />
    );
    const HeaderWrapper = (props) => <thead {...props}></thead>;
    const HeaderRow = (props) => <tr {...props}></tr>;
    const HeaderCell = (props) => <th {...props}></th>;
    const BodyWrapper = (props) => {
        return <tbody {...props}></tbody>;
    };
    const BodyCell = (props) => {
        return (
            <td
                {...props}
                style={{
                    ...props.style,
                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                }}
                className={styles['order-body_td']}
            ></td>
        );
    };
    const BodyRow = (props) => {
        const { children, className, style, ...otherProps } = props;
        let itemData;
        if ('data-row-key' in props) {
            // 获取当前数据项
            const latestItem = children.at(-1);
            if (latestItem) itemData = latestItem.props.record;
        }
        return <>
            {/* 订单上方的数据显示 */}
            {
                (
                    itemData &&
                    (headerRender || headerOptions)
                ) &&
                <tr {...otherProps} data-row-key={props['data-row-key'] + '/children'}>
                    <td colSpan="9" style={{padding: '0'}}>
                        <div
                            className={`${styles['table-tr__action-content']}`}>
                            <div className={styles['action-content__info']}>
                                {
                                    headerRender?.map(v => (
                                        <span className={styles['action-content__item']} key={v.label}>
                                        {v.label}：{v.render(itemData)}
                                    </span>
                                    ))
                                }
                            </div>
                            {headerOptions && headerOptions(itemData)}
                        </div>
                    </td>
                </tr>
            }
            <tr {...otherProps} style={{
                style,
                borderStyle: 'solid',
                borderWidth: '1px 0 0 1px',
            }} className={styles['order-body_tr']}>
                {children}
            </tr>
        </>
    }
    const components = useRef({
        table: MyTable,
        header: {
            wrapper: HeaderWrapper,
            row: HeaderRow,
            cell: HeaderCell,
        },
        body: {
            wrapper: BodyWrapper,
            row: BodyRow,
            cell: BodyCell,
        },
    });
    return <FAntdTable
        ref={ref}
        components={components.current}
        {...tableArgs}
    />
})
export default FAntdOrderTable;

import { Modal } from 'antd'
import Draggable from 'react-draggable'
import { useState, useRef } from 'react'
import styles from './index.module.scss'

const AntdDragModal = ({
    children,
    state,
    draggableProps,
    titleStyles,
    ...props
}) => {
    // 拖拽功能
    const draggableRef = useRef();
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const [disabled, setDisabled] = useState(true);
    // 开始拖拽
    const onStart = (_, uiData) => {
        const {clientWidth, clientHeight} = window.document.documentElement;
        const targetRect = draggableRef.current?.getBoundingClientRect();
        if (!targetRect) return
        draggableProps?.onStart?.(targetRect)
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    // modal 关闭
    const reOnCancel = () => {
        state?.[1]?.(false)
        props?.onCancel?.()
    }

    return (
        <Modal
            centered
            {...props}
            classNames={{
                ...(props?.classNames ?? {}),
                body: `${styles['ant-model_scroll-body']} ${props?.classNames?.body ?? ''}`,
            }}
            open={state?.[0]}
            onCancel={reOnCancel}
            title={
                <div
                    style={{
                        ...(titleStyles ?? {}),
                        cursor: 'move',
                    }}
                    onMouseOver={() => disabled && setDisabled(false)}
                    onMouseOut={() => setDisabled(true)}
                >
                    {props?.title ?? '默认标题'}
                </div>
            }
            modalRender={modal => (
                <Draggable
                    {...draggableProps}
                    disabled={disabled}
                    bounds={bounds}
                    nodeRef={draggableRef}
                    onStart={(event, uiData) => onStart(event, uiData)}
                >
                    <div ref={draggableRef}>{modal}</div>
                </Draggable>
            )}
        >
            {children}
        </Modal>
    )
}

// 将其他子组件也带过来
const { $$typeof, render, ...components } = Modal;
for (const name in components) AntdDragModal[name] = Modal[name];

export default AntdDragModal;

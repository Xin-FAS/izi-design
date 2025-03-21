import { Input } from 'antd';
import { forwardRef, useCallback } from 'react';
import { throttle, debounce } from 'lodash-es'

// 获取公共属性
const getBaseArgs = ({
    state,
    onChange,
    ...args
}, ref) => ({
    ref,
    allowClear: true,
    value: state?.[0],
    onChange: (event, ...args) => {
        state?.[1](event.target.value, ...args)
        onChange && onChange(event, ...args)
    },
    ...args
})

// 基础Input
const BaseInput = forwardRef((props, ref) => <Input
    placeholder={'请输入'}
    {...getBaseArgs(props, ref)}
/>)

// 先将其他子组件也带过来
const { $$typeof, render, ...components } = Input
for (const name in components) BaseInput[name] = Input[name]

// 重写Password
BaseInput.Password = forwardRef((props, ref) =>
    <Input.Password
        placeholder={'请输入密码'}
        {...getBaseArgs(props, ref)}
    />
)
// 重写Search
BaseInput.Search = forwardRef((props, ref) => {
    // 搜索
    const toSearch = (...args) => {
        props.onSearch && props.onSearch(...args)
    }
    // 节流搜索
    const throttleSearch = throttle(toSearch, props.throttleDuration ?? 0, { trailing: props.throttleTrailing ?? false })
    // 自动搜索
    const debounceSearch = useCallback(debounce(toSearch, props.debounceDuration ?? 500), [])
    // 输入
    const onInput = event => {
        if (props.autoSearch) debounceSearch(event.target.value)
        props.onInput && props.onInput(event)
    }

    return <Input.Search
        placeholder={props.autoSearch ? '输入后自动搜索': '请输入'}
        {...getBaseArgs(props, ref)}
        onSearch={throttleSearch}
        onInput={onInput}
    />
})
// 重写TextArea
BaseInput.TextArea = forwardRef((props, ref) =>
    <Input.TextArea
        placeholder={'请输入'}
        showCount
        maxLength={100}
        {...getBaseArgs(props, ref)}
        style={{ height: 100, ...props?.style }}
    />
)
// 重写OTP
BaseInput.OTP = forwardRef(({
    state,
    onInput,
    ...args
}, ref) => <Input.OTP
        ref={ref}
        value={state?.[0]}
        {...args}
        onInput={value => {
            state?.[1](value.join(''));
            onInput && onInput(value)
        }}
    />
)

export default BaseInput

import { Input, InputNumber } from 'antd';
import { forwardRef, useCallback, useMemo } from 'react';
import { throttle, debounce } from 'lodash-es';

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
        event.target.value = event.target.value?.trim();
        state?.[1](event.target.value, ...args);
        onChange && onChange(event, ...args);
    },
    ...args,
});

// 基础Input
const FAntdInput = forwardRef((props, ref) => <Input
    placeholder={'请输入'}
    {...getBaseArgs(props, ref)}
/>);

// 先将其他子组件也带过来
const { $$typeof, render, ...components } = Input;
for (const name in components) FAntdInput[name] = Input[name];

// 重写Password
FAntdInput.Password = forwardRef((props, ref) =>
    <Input.Password
        placeholder={'请输入密码'}
        {...getBaseArgs(props, ref)}
    />,
);
// 重写Search
FAntdInput.Search = forwardRef((props, ref) => {
    // 搜索
    const onSearch = (...args) => {
        props.onSearch && props.onSearch(...args);
    };
    // 节流搜索
    const throttleSearch = throttle(onSearch, props.throttleDuration ?? 0, { trailing: props.throttleTrailing ?? false });
    // 自动搜索
    const debounceSearch = useCallback(debounce(onSearch, props.debounceDuration ?? 500), []);
    // 输入
    const onInput = event => {
        if (props.autoSearch) debounceSearch(event.target.value);
        props.onInput && props.onInput(event);
    };

    return <Input.Search
        placeholder={props.autoSearch ? '输入后自动搜索' : '请输入'}
        {...getBaseArgs(props, ref)}
        onSearch={throttleSearch}
        onInput={onInput}
    />;
});
// 重写TextArea
FAntdInput.TextArea = forwardRef((props, ref) =>
    <Input.TextArea
        placeholder={'请输入'}
        showCount
        maxLength={100}
        {...getBaseArgs(props, ref)}
        style={{ height: 100, ...props?.style }}
    />);
// 重写OTP
FAntdInput.OTP = forwardRef(({
    state,
    onInput,
    ...args
}, ref) =>
    <Input.OTP
        ref={ref}
        value={state?.[0]}
        {...args}
        onInput={value => {
            state?.[1](value.join(''));
            onInput && onInput(value);
        }}
    />);

// 添加Number模式
FAntdInput.Number = forwardRef(({
    state,
    onChange,
    mode,
    strict, // 严格模式（限制步长为1的正整数）
    ...args
}, ref) => {
    const getStrictValue = value => strict ? ~~value: value
    const modeArgs = useMemo(() => {
        let args = {}
        // 价格格式
        if (mode === 'price') {
            args = {
                formatter: value => `￥${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                parser: value => getStrictValue(value?.replace(/\￥\s?|(,*)/g, ''))
            }
        }
        // 百分比格式
        if (mode === 'percent') {
            args = {
                formatter: value => `${value}%`,
                parser: value => getStrictValue(value?.replace('%', ''))
            }
        }
        return args
    }, [])

    const useMax = useMemo(() => {
        if (mode === 'percent' && strict) return 100
        return undefined
    }, [])

    const useOnChange = value => {
        state?.[1](value);
        onChange && onChange(value);
    }

    return <InputNumber
        placeholder={'请输入'}
        ref={ref}
        value={state?.[0]}
        keyboard
        changeOnWheel
        min={strict ? 0: undefined}
        max={useMax}
        step={strict ? 1: 0.1}
        precision={strict ? 0 : undefined}
        {...modeArgs}
        {...args}
        onChange={useOnChange}
    />;
});

export default FAntdInput;

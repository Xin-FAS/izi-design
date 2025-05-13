import styles from './index.module.scss'
import { useCallback, useEffect, useMemo } from 'react'

const PwdScore = ({
    value,
    scoreList = [
        {
            color: '#a0133d',
            label: '非常弱',
            value: 0
        },
        {
            color: '#f7e84d',
            label: '较弱',
            value: 1
        },
        {
            color: '#ffa500',
            label: '一般',
            value: 2
        },
        {
            color: '#1677ff',
            label: '较强',
            value: 3
        },
        {
            color: '#2f9715',
            label: '强',
            value: 4
        },
    ],
    defaultColor = '#e2e2e2',
    reverse = false
}) => {
    // 先排序
    const useScoreList = useMemo(() => scoreList.sort((a, b) => {
        if (a.value > b.value) return reverse ? -1: 1
        if (a.value < b.value) return reverse ? 1: -1
        return 0
    }), [scoreList, reverse])
    // 获取渲染背景色
    const getBackgroundColor = useCallback(matchIndex => {
        const targetIndex = useScoreList.findIndex(r => r.value === value)
        if (targetIndex === matchIndex) return useScoreList[matchIndex].color
        return defaultColor
    }, [value, scoreList])
    // 获取当前label
    const activeLabel = useMemo(() => useScoreList.find(r => r.value === value)?.label, [value, scoreList])

    return <div className={styles['pwd-score__wrapper']}>
        {
            Array.from({ length: useScoreList.length }, (_, index) => (
                <div
                    className={styles['pwd-score__item']}
                    style={{ backgroundColor: getBackgroundColor(index) }}
                    key={'pwd-score:' + index}
                />
            ))
        }
        <span className={styles['pwd-score__text']} style={{
            opacity: +Boolean(activeLabel)
        }}>{activeLabel ?? '无'}</span>
    </div>
}
export default PwdScore

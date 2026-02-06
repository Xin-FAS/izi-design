import CryptoJS from "crypto-js";

// 存储数据
const dataMap = new Map()
// 基于cryptojs aes加密
const encryptAES = (value, key) => CryptoJS.AES.encrypt(JSON.stringify({ value }), key).toString()
// 基于cryptojs aes解密
const decryptAES = (value, key) => JSON.parse(CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8) ?? '')?.value
// 生成散列值
const encryptPBKDF2 = (value, key) => CryptoJS.PBKDF2(value, key, { keySize: 128, iterations: 128 }) + ''
// 存储
const setItem = ({
    key,
    value,
    duration = -1,
    local = true
}) => {
    // 伪随机生成盐值
    const salt = CryptoJS.lib.WordArray.random(128)
    // 使用PBKDF2迭代128次生成散列值当作密钥
    const encryptVi = encryptPBKDF2(key, salt)
    // 加密value
    const encryptValue = encryptAES(value, encryptVi)
    // 加密key，这里使用不可逆SHA3
    const encryptKey = CryptoJS.SHA3(key) + ''
    // 加密后的内容，存盐值 + 结束时间
    const encryptContent = encryptAES({
        value: encryptValue,
        vi: {
            delay: duration === -1 ? duration : Date.now() + duration,
            salt
        }
    }, key)
    // 存储到local
    if (local) localStorage.setItem(encryptKey, encryptContent)
    // 存储到本地
    else dataMap.set(encryptKey, encryptContent)
}
// 获取
const getItem = key => {
    const handle = _key => {
        // 获取加密key
        const encryptKey = CryptoJS.SHA3(_key) + ''
        // 获取加密内容
        let encryptContent = dataMap.get(encryptKey)
        // 同时存在以map优先
        const localEncryptContent = localStorage.getItem(encryptKey)
        if (localEncryptContent && !encryptContent) encryptContent = localEncryptContent
        // 判空
        if (!encryptContent) return
        // 获取密钥，过期时间，盐值
        const {
            vi: {
                delay,
                salt
            },
            value: encryptValue
        } = decryptAES(encryptContent, _key)
        // 过期清空
        if (delay !== -1 && Date.now() > delay) return removeItem(_key)
        // 获取密钥
        const encryptVi = encryptPBKDF2(_key, salt)
        // 解密
        return decryptAES(encryptValue, encryptVi)
    }
    return Array.isArray(key) ?
        key.map(handle):
        handle(key)
}
// 删除
const removeItem = key => {
    const handle = _key => {
        const encryptKey= String(CryptoJS.SHA3(_key))
        dataMap.delete(encryptKey)
        localStorage.removeItem(encryptKey)
    }
    if (Array.isArray(key)) key.forEach(handle)
    else handle(key)
}

export default {
    setItem,
    getItem,
    removeItem
}

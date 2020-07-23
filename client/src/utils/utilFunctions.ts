export const getUniqueId = (prefix): string =>
    `${prefix}-${Math.random().toString(36).substr(2, 9)}`

export const getSafe = (fn, defaultValue) => {
    try {
        return fn()
    } catch (e) {
        return defaultValue
    }
}

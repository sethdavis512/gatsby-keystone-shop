export const getUniqueId = (prefix): string =>
    `${prefix}-${Math.random().toString(36).substr(2, 9)}`

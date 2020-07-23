import React, { createContext, ReactNode } from 'react'

interface GlobalProviderProps {
    children: ReactNode
    providerValue?: any
}

export const GlobalContext = createContext(undefined)

export const GlobalProvider: React.FC<GlobalProviderProps> = ({
    children,
    providerValue
}) => {
    return (
        <GlobalContext.Provider value={providerValue}>
            {children}
        </GlobalContext.Provider>
    )
}

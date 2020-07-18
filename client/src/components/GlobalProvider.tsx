import React, { createContext, ReactNode, useContext } from 'react'

interface GlobalProviderProps {
    children: ReactNode
    providerValue: any
}

const intialContext = {
    test: 'abc'
}

export const GlobalContext = createContext(intialContext)

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

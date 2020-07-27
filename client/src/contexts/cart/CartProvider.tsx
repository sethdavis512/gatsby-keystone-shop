import React, { createContext, ReactNode } from 'react'
import { useReducer } from 'react'

import { CartReducer } from './CartReducer'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect } from 'react'

interface CartProviderProps {
    children: ReactNode
    providerValue?: any
}

export const CartContext = createContext({
    state: {
        items: []
    },
    dispatch: any => {}
})

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const initialState = {
        items: []
    }
    const [localStorage, setLocalStorage] = useLocalStorage(
        'cart',
        initialState
    )
    const [state, dispatch] = useReducer(CartReducer, localStorage) as any
    const stringifiedState = JSON.stringify(state)

    useEffect(() => {
        setLocalStorage(state)
    }, [stringifiedState])

    const providerValues = {
        state,
        dispatch
    }

    return (
        <CartContext.Provider value={providerValues}>
            {children}
        </CartContext.Provider>
    )
}

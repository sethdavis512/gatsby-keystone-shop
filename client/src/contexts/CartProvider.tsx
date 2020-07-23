import React, { createContext, ReactNode } from 'react'
import { useReducer } from 'react'

interface CartProviderProps {
    children: ReactNode
    providerValue?: any
}

export const CartContext = createContext(undefined)

const CartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART'
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const cartReducer = (state, { type, payload }) => {
        switch (type) {
            case CartActionTypes.ADD_TO_CART:
                return {
                    ...state,
                    items: [...state.items, payload.productId]
                }

            default:
                return Error('Action type is not defined.')
        }
    }
    const initialState = { items: [] }
    const [state, dispatch] = useReducer(cartReducer, initialState) as any

    const addToCart = productId =>
        dispatch({ type: CartActionTypes.ADD_TO_CART, payload: { productId } })

    const itemsLength = state.items.length

    return (
        <CartContext.Provider
            value={{
                addToCart,
                items: state.items,
                itemsLength,
                state
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

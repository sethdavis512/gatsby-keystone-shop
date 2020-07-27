import { CartActionTypes } from './CartActionTypes'

export const addToCartHandler = (
    product,
    quantity
): { type: string; payload: object } => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: {
        product,
        quantity
    }
})

export const clearCartHandler = () => ({
    type: CartActionTypes.CLEAR_CART
})

export const removeItemHandler = (id, quantity = 1) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
        id,
        quantity
    }
})

export const removeLineItemHandler = id => ({
    type: CartActionTypes.REMOVE_LINE_ITEM,
    payload: {
        id
    }
})

import {
    addToCartHandler,
    clearCartHandler,
    removeItemHandler,
    removeLineItemHandler
} from './../contexts/cart/CartActions'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart/CartProvider'

export const useCart = () => {
    const { state, dispatch } = useContext(CartContext)

    const addToCart = (product, quantity) =>
        dispatch(addToCartHandler(product, quantity))

    const clearCart = () => dispatch(clearCartHandler())

    const removeItem = productId => dispatch(removeItemHandler(productId))

    const removeLineItem = productId =>
        dispatch(removeLineItemHandler(productId))

    const totalQuantity = state.items.reduce(
        (total, currentItem) => (total += currentItem.quantity),
        0
    )

    return {
        // State
        hasItems: state.items.length > 0,
        items: state.items,
        totalQuantity,

        // Dispatch
        addToCart,
        clearCart,
        removeItem,
        removeLineItem
    }
}

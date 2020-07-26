import { useContext } from 'react'
import numeral from 'numeral'
import {
    addToCartHandler,
    clearCartHandler,
    removeItemHandler,
    removeLineItemHandler
} from './../contexts/cart/CartActions'
import { CartContext } from '../contexts/cart/CartProvider'

export const useCart = () => {
    // State
    const { state, dispatch } = useContext(CartContext)

    const totalQuantity = state.items.reduce(
        (total, currentItem) => (total += currentItem.quantity),
        0
    )

    const totalCost = state.items.reduce(
        (total, currentItem) =>
            (total += numeral(currentItem.price)
                .multiply(currentItem.quantity)
                .value()),
        0
    )

    // Actions
    const addToCart = (product, quantity) =>
        dispatch(addToCartHandler(product, quantity))

    const clearCart = () => dispatch(clearCartHandler())

    const removeItem = productId => dispatch(removeItemHandler(productId))

    const removeLineItem = productId =>
        dispatch(removeLineItemHandler(productId))

    return {
        // State
        hasItems: state.items.length > 0,
        items: state.items,
        totalCost,
        totalQuantity,

        // Actions
        addToCart,
        clearCart,
        removeItem,
        removeLineItem
    }
}

import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button'
import Box from '../components/Box'
import Wrapper from '../components/Wrapper'

import { useCart } from '../hooks/useCart'
import { toDollar } from '../utils/utilFunctions'

const CartContainer = () => {
    const {
        addToCart,
        clearCart,
        items,
        hasItems,
        removeItem,
        removeLineItem,
        totalCost
    } = useCart()

    const handleClearCart = () => clearCart()
    const createHandleAddToCart = product => () => addToCart(product, 1)
    const createHandleRemoveItem = productId => () => removeItem(productId)
    const createHandleRemoveLineItem = productId => () => {
        const shouldRemove = confirm(
            'Are you sure you want to remove this item?'
        )
        if (shouldRemove) {
            removeLineItem(productId)
        }
    }

    const mappedItems = items.map(item => (
        <tr key={item.title}>
            <td>{item.title}</td>
            <td>
                <div className="field has-addons">
                    <div className="control">
                        <Button
                            handleClick={createHandleRemoveItem(item.id)}
                            text="-"
                        />
                    </div>
                    <div className="control">
                        <input
                            className="input has-text-centered"
                            type="text"
                            placeholder="Find a repository"
                            value={item.quantity}
                            readOnly
                            style={{ width: '50px' }}
                        />
                    </div>
                    <div className="control">
                        <Button
                            handleClick={createHandleAddToCart(item)}
                            text="+"
                        />
                    </div>
                    <div className="control">
                        <Button
                            className="is-danger"
                            handleClick={createHandleRemoveLineItem(item.id)}
                            text="X"
                        />
                    </div>
                </div>
            </td>
            <td>{toDollar(item.price)}</td>
        </tr>
    ))

    return (
        <Wrapper>
            {hasItems && (
                <div className="box">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{mappedItems}</tbody>
                    </table>
                    <p className="has-text-right">
                        <strong>Total Cost:</strong>
                        <br />
                        {toDollar(totalCost)}
                    </p>
                </div>
            )}
            {hasItems && (
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div>
                        <Link className="button" to="/shop">
                            Continue Shopping
                        </Link>{' '}
                        <Button
                            handleClick={handleClearCart}
                            text="Clear Cart"
                        />
                    </div>
                    <Link className="button is-success" to="/checkout">
                        Checkout
                    </Link>
                </Box>
            )}
            {!hasItems && <p>Cart is empty.</p>}
        </Wrapper>
    )
}

export default CartContainer

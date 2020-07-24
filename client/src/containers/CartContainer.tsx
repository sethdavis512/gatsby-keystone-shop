import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button'
import Columns from '../components/Columns'
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
    const createHandleRemoveLineItem = productId => () =>
        removeLineItem(productId)

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
                    <div className="control has-text-right">
                        <Button
                            handleClick={createHandleAddToCart(item)}
                            text="+"
                        />
                    </div>
                </div>
            </td>
            <td>{toDollar(item.price)}</td>
            <td>
                <Button
                    handleClick={createHandleRemoveLineItem(item.id)}
                    text="Remove"
                />
            </td>
        </tr>
    ))

    return (
        <Wrapper>
            <Columns centered>
                <Columns.Column className="is-8">
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
                            <p>
                                <strong>Total Cost:</strong>{' '}
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
                </Columns.Column>
            </Columns>
        </Wrapper>
    )
}

export default CartContainer

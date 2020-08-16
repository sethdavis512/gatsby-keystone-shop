import React, { useCallback, useState } from 'react'
import { navigate } from 'gatsby'

import Button from '../components/Button'
import Columns from '../components/Columns'
import Panel from '../components/Panel'
import ShowContent from '../components/ShowContent'
import Wrapper from '../components/Wrapper'

import { toDollar } from '../utils/utilFunctions'
import useCart from '../hooks/useCart'

const DetailContainer = ({ product }) => {
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => setQuantity(quantity + 1)
    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = useCallback(() => {
        addToCart(product, quantity)
        navigate('/cart')
    }, [quantity])

    return (
        <Wrapper>
            <ShowContent show={!!product}>
                <Columns centered>
                    <Columns.Column className="is-4">
                        <img
                            src={product.image}
                            alt={`${product.name} image`}
                        />
                    </Columns.Column>
                    <Columns.Column className="is-4">
                        <h2 className="title is-2">{product.name}</h2>
                        <Panel>
                            <Panel.Block>{product.description}</Panel.Block>
                            <Panel.Block>
                                {toDollar(product.price / 100)}
                            </Panel.Block>
                        </Panel>
                        <div className="field has-addons">
                            <div className="control">
                                <Button
                                    handleClick={handleDecrement}
                                    text="-"
                                />
                            </div>
                            <div className="control">
                                <input
                                    className="input has-text-centered"
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    style={{ width: '50px' }}
                                />
                            </div>
                            <div className="control has-text-right">
                                <Button
                                    handleClick={handleIncrement}
                                    text="+"
                                />
                            </div>
                        </div>
                        <Button
                            handleClick={handleAddToCart}
                            className="is-success"
                            text="Add to Cart"
                        />
                    </Columns.Column>
                </Columns>
            </ShowContent>
        </Wrapper>
    )
}

export default DetailContainer

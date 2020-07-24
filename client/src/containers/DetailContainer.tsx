import React, { useState } from 'react'

import Button from '../components/Button'
import Columns from '../components/Columns'
import Panel from '../components/Panel'
import ShowContent from '../components/ShowContent'
import Wrapper from '../components/Wrapper'

import { getSafe, toDollar } from '../utils/utilFunctions'
import { useProduct } from '../hooks/useProduct'
import { useCart } from '../hooks/useCart'
import { navigate } from 'gatsby'
import { useCallback } from 'react'

const DetailContainer = ({ params }) => {
    const product = useProduct(params.pid)
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => setQuantity(quantity + 1)
    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const productImgUrl = getSafe(() => product.image.publicUrl, '')
    const productTitle = getSafe(() => product.title, '')
    const productDescription = getSafe(() => product.description, '')
    const productPrice = getSafe(() => product.price, 0)

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
                            src={productImgUrl}
                            alt={`${productTitle} image`}
                        />
                    </Columns.Column>
                    <Columns.Column className="is-4">
                        <h2 className="title is-2">{productTitle}</h2>
                        <Panel>
                            <Panel.Block>{productDescription}</Panel.Block>
                            <Panel.Block>{toDollar(productPrice)}</Panel.Block>
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

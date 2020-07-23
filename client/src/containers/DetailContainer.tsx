import React from 'react'

import Button from '../components/Button'
import Columns from '../components/Columns'
import Panel from '../components/Panel'
import ShowContent from '../components/ShowContent'
import Wrapper from '../components/Wrapper'

import { getSafe } from '../utils/utilFunctions'
import { useProduct } from '../hooks/useProduct'
import { useCart } from '../hooks/useCart'

const DetailContainer = ({ params }) => {
    const product = useProduct(params.pid)
    const { addToCart } = useCart()

    const productImgUrl = getSafe(() => product.image.publicUrl, '')
    const productTitle = getSafe(() => product.title, '')
    const productDescription = getSafe(() => product.description, '')
    const productPrice = getSafe(() => product.price, 0)

    const handleAddToCart = () => addToCart(product.id)

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
                            <Panel.Block>{productPrice}</Panel.Block>
                        </Panel>
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

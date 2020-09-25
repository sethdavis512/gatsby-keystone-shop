import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Columns from '../components/Columns'
import Card from '../components/Card'
import ShowContent from '../components/ShowContent'
import Wrapper from '../components/Wrapper'
import { getUniqueId } from '../utils/utilFunctions'
import useProducts from '../hooks/useProducts'
import Button from '../components/Button'

const ShopContainer = () => {
    const [products] = useProducts()

    const mappedCards =
        products &&
        products.map(product => {
            if (product.active) {
                return (
                    <Link to={`/product/${kebabCase(product.name)}`}>
                        <Card key={`product-key-${kebabCase(product.name)}`}>
                            <Card.Image
                                src={
                                    product.image
                                        ? product.image.publicUrl
                                        : undefined
                                }
                            />
                            <Card.Content
                                title={product.name}
                                description={product.description}
                                price={product.price}
                            />
                            <div className="card-footer">
                                <div className="card-footer-item">
                                    <Button
                                        className="is-fullwidth"
                                        text="See Details"
                                    />
                                </div>
                            </div>
                        </Card>
                    </Link>
                )
            } else {
                return null
            }
        })

    const mappedColumns =
        mappedCards &&
        mappedCards.map(card => (
            <Columns.Column key={getUniqueId('card-column')} className="is-3">
                {card}
            </Columns.Column>
        ))

    return (
        <Wrapper hasColumns={false}>
            <ShowContent show={products && products.length > 0}>
                <Columns className="is-multiline">{mappedColumns}</Columns>
            </ShowContent>
        </Wrapper>
    )
}

export default ShopContainer

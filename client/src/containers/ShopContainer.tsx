import React from 'react'
import { Link } from 'gatsby'

import Columns from '../components/Columns'
import Card from '../components/Card'
import ShowContent from '../components/ShowContent'
import Wrapper from '../components/Wrapper'
import { getUniqueId } from '../utils/utilFunctions'
import { useProducts } from '../hooks/useProducts'

const ShopContainer = () => {
    const products = useProducts()

    const mappedCards =
        products &&
        products.map(product => (
            <Link to={`/shop/detail?pid=${product.id}`}>
                <Card key={`product-key-${product.id}`}>
                    <Card.Image
                        src={
                            product.image ? product.image.publicUrl : undefined
                        }
                    />
                    <Card.Content
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                </Card>
            </Link>
        ))

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

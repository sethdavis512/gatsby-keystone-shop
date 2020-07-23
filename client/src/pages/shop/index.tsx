import React from 'react'
import { Link } from 'gatsby'

import Columns from '../../components/Columns'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'
import ShowContent from '../../components/ShowContent'

import { getUniqueId } from '../../utils/utilFunctions'

import { useGlobal } from '../../hooks/useGlobal'
import { useProducts } from '../../hooks/useProducts'

const ShopPage = () => {
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

    const mappedColumns = mappedCards.map(card => (
        <Columns.Column key={getUniqueId('card-column')} className="is-3">
            {card}
        </Columns.Column>
    ))

    const globalContext = useGlobal()

    return (
        <Layout>
            <SEO title="Product" />
            <Hero type="primary">
                <h1 className="title">Shop</h1>
            </Hero>
            <Wrapper>
                <Columns className="is-multiline">
                    <ShowContent show={products.length > 0}>
                        {mappedColumns}
                    </ShowContent>
                </Columns>
            </Wrapper>
        </Layout>
    )
}

export default ShopPage

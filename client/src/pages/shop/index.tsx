import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

import Columns from '../../components/Columns'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'
import ShowContent from '../../components/ShowContent'

import { GET_ALL_PRODUCTS } from '../../queries/Product'
import { getUniqueId } from '../../utils/utilFunctions'

import { useGlobalContext } from '../../hooks/useGlobalContext'

const ShopPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await axios.post('/admin/api', {
                query: GET_ALL_PRODUCTS
            })
            setProducts(results.data.data.allProducts)
        }

        fetchProducts()
    }, [])

    const mappedCards =
        products &&
        products.map(product => (
            <Card
                key={`product-key-${product.id}`}
                onClick={() => navigate(`/shop/detail?pid=${product.id}`)}
            >
                <Card.Image
                    src={product.image ? product.image.publicUrl : undefined}
                />
                <Card.Content
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            </Card>
        ))

    const mappedColumns = mappedCards.map(card => (
        <Columns.Column key={getUniqueId('card-column')} className="is-3">
            {card}
        </Columns.Column>
    ))

    const globalContext = useGlobalContext()
    console.log(globalContext)

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

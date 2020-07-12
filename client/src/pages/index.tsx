import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Columns from '../components/Columns'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

import { GET_ALL_PRODUCTS } from '../queries/Product'

const IndexPage = () => {
    const [stickers, setStickers] = useState([])

    useEffect(() => {
        const fetchStickers = async () => {
            const results = await axios.post('/admin/api', {
                query: GET_ALL_PRODUCTS
            })
            setStickers(results.data.data.allProducts)
        }

        fetchStickers()
    }, [])

    const mappedCards =
        stickers &&
        stickers.map(sticker => (
            <Card>
                <Card.Image />
                <Card.Content
                    title={sticker.title}
                    description={sticker.description}
                />
            </Card>
        ))

    const mappedColumns = mappedCards.map(card => (
        <Columns.Column className="is-3">{card}</Columns.Column>
    ))

    return (
        <Layout>
            <SEO title="Home" />
            <Hero type="primary">
                <h1 className="title">Welcome</h1>
            </Hero>
            <Wrapper>
                <Columns className="is-multiline">{mappedColumns}</Columns>
            </Wrapper>
        </Layout>
    )
}

export default IndexPage

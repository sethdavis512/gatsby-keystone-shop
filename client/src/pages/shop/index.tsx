import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ShopContainer from '../../containers/ShopContainer'

const ShopPage = () => {
    return (
        <Layout>
            <SEO title="Product" />
            <Hero type="primary">
                <h1 className="title">Shop</h1>
            </Hero>
            <ShopContainer />
        </Layout>
    )
}

export default ShopPage

import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CheckoutContainer from '../containers/CheckoutContainer'

const CheckoutPage = () => (
    <Layout>
        <SEO title="Checkout" />
        <Hero type="primary">
            <h1 className="title">Checkout</h1>
        </Hero>
        <CheckoutContainer />
    </Layout>
)

export default CheckoutPage

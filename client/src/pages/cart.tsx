import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CartContainer from '../containers/CartContainer'

const CartPage = () => (
    <Layout>
        <SEO title="Cart" />
        <Hero type="primary">
            <h1 className="title">Cart</h1>
        </Hero>
        <CartContainer />
    </Layout>
)

export default CartPage

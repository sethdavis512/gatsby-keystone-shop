import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CartContainer from '../containers/CartContainer'
import Columns from '../components/Columns'

const CartPage = () => (
    <Layout>
        <SEO title="Cart" />
        <Hero type="primary">
            <Columns centered>
                <Columns.Column className="is-8">
                    <h1 className="title">Cart</h1>
                </Columns.Column>
            </Columns>
        </Hero>
        <CartContainer />
    </Layout>
)

export default CartPage

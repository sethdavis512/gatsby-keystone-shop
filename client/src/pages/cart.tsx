import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CartContainer from '../containers/CartContainer'

import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const CartPage = () => (
    <Layout>
        <SEO title="Cart" />
        <Hero type="primary">
            <h1 className="title">Cart</h1>
        </Hero>
        <CartContainer stripePromise={stripePromise} />
    </Layout>
)

export default CartPage

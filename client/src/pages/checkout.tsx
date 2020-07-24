import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Columns from '../components/Columns'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

import TextInput from '../components/TextInput'
import { Link } from 'gatsby'

const stripePromise = loadStripe(process.env.STRIPE_KEY)

const CheckoutPage = () => (
    <Layout>
        <SEO title="Checkout" />
        <Hero type="primary">
            <h1 className="title">Checkout</h1>
        </Hero>
        <Wrapper>
            <Columns className="is-centered">
                <Columns.Column className="is-6">
                    <Link className="button" to="/cart">
                        Back to Cart
                    </Link>
                    <Elements stripe={stripePromise}>
                        <form>
                            <div className="box">
                                <TextInput
                                    id="firstName"
                                    label="First Name"
                                    handleChange={() => {}}
                                    value=""
                                />
                            </div>
                            <CardElement className="box" />
                        </form>
                    </Elements>
                </Columns.Column>
            </Columns>
        </Wrapper>
    </Layout>
)

export default CheckoutPage

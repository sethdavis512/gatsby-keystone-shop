import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Link } from 'gatsby'
import { loadStripe } from '@stripe/stripe-js'

import Columns from '../components/Columns'
import TextInput from '../components/TextInput'
import Wrapper from '../components/Wrapper'

const stripePromise = loadStripe(process.env.STRIPE_KEY)

const CheckoutContainer = () => {
    return (
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
    )
}

export default CheckoutContainer

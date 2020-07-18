import React from 'react'
import { Link } from 'gatsby'

import Columns from '../components/Columns'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

const CartPage = () => (
    <Layout>
        <SEO title="Cart" />
        <Hero type="primary">
            <h1 className="title">Cart</h1>
        </Hero>
        <Wrapper>
            <Columns>
                <Columns.Column>
                    <p>
                        Your new page.
                        <br />
                        <Link to="/">Go Home</Link>
                    </p>
                </Columns.Column>
            </Columns>
        </Wrapper>
    </Layout>
);

export default CartPage;
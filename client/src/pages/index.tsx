import React from 'react'

import Columns from '../components/Columns'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Hero type="primary">
                <h1 className="title">Welcome</h1>
            </Hero>
            <Wrapper>
                <Columns>
                    <Columns.Column>
                        <p>Thanks for visiting!</p>
                    </Columns.Column>
                </Columns>
            </Wrapper>
        </Layout>
    )
}

export default IndexPage

import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import IndexContainer from '../containers/IndexContainer'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Hero type="primary">
                <h1 className="title">Welcome</h1>
            </Hero>
            <IndexContainer />
        </Layout>
    )
}

export default IndexPage

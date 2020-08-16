import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SuccessContainer from '../containers/SuccessContainer'

const SuccessPage = () => (
    <Layout>
        <SEO title="About" />
        <Hero type="success">
            <h1 className="title">Success!</h1>
        </Hero>
        <SuccessContainer />
    </Layout>
)

export default SuccessPage

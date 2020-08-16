import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CancelContainer from '../containers/CancelContainer'

const CancelPage = () => (
    <Layout>
        <SEO title="Cancel" />
        <Hero type="danger">
            <h1 className="title">Cancelled.</h1>
        </Hero>
        <CancelContainer />
    </Layout>
)

export default CancelPage

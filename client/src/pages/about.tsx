import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AboutContainer from '../containers/AboutContainer'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <Hero type="primary">
            <h1 className="title">About</h1>
        </Hero>
        <AboutContainer />
    </Layout>
)

export default AboutPage

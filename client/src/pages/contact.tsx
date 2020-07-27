import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactContainer from '../containers/ContactContainer'

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <Hero type="primary">
            <h1 className="title">Contact</h1>
        </Hero>
        <ContactContainer />
    </Layout>
)

export default ContactPage

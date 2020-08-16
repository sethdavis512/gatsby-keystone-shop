import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import DetailContainer from '../../containers/DetailContainer'

const DetailPage = ({ pageContext }) => {
    const { product } = pageContext

    return (
        <Layout>
            <SEO title="Detail" />
            <Hero type="primary">
                <h1 className="title">Product Details</h1>
            </Hero>
            <DetailContainer product={product} />
        </Layout>
    )
}

export default DetailPage

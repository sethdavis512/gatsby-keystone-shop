import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import DetailContainer from '../../containers/DetailContainer'

import { useParams } from '../../hooks/useParams'

const DetailPage = ({ location }) => {
    const params = useParams(location)

    return (
        <Layout>
            <SEO title="Detail" />
            <Hero type="primary">
                <h1 className="title">Product Details</h1>
            </Hero>
            <DetailContainer params={params} />
        </Layout>
    )
}

export default DetailPage

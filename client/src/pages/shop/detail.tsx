import React from 'react'

import Columns from '../../components/Columns'
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
                <Columns centered>
                    <Columns.Column className="is-8">
                        <h1 className="title">Product Details</h1>
                    </Columns.Column>
                </Columns>
            </Hero>
            <DetailContainer params={params} />
        </Layout>
    )
}

export default DetailPage

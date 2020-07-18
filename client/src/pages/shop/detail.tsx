import React, { useEffect } from 'react'
import axios from 'axios'

import Columns from '../../components/Columns'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Wrapper from '../../components/Wrapper'
import { useParams } from '../../hooks/useParams'
import { GET_PRODUCT } from '../../queries/Product'
import { useState } from 'react'
import Spinner from '../../components/Spinner'
import ShowContent from '../../components/ShowContent'

const DetailPage = ({ location }) => {
    const [product, setProduct] = useState(null)
    const params = useParams(location)

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await axios.post('/admin/api', {
                query: GET_PRODUCT,
                variables: {
                    id: params.pid
                }
            })

            setProduct(results.data.data.Product)
        }

        fetchProducts()
    }, [])

    return (
        <Layout>
            <SEO title="Detail" />
            <Hero type="primary">
                <h1 className="title">Detail</h1>
            </Hero>
            <Wrapper>
                <Columns>
                    <Columns.Column>
                        <ShowContent show={!!product}>
                            {JSON.stringify(product, null, 4)}
                        </ShowContent>
                    </Columns.Column>
                </Columns>
            </Wrapper>
        </Layout>
    )
}

export default DetailPage

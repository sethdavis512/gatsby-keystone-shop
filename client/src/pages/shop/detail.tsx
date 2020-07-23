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
import Panel from '../../components/Panel'
import Button from '../../components/Button'
import ShowContent from '../../components/ShowContent'
import { getSafe } from '../../utils/utilFunctions'

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

    const productImgUrl = getSafe(() => product.image.publicUrl, '')
    const productTitle = getSafe(() => product.title, '')
    const productDescription = getSafe(() => product.description, '')
    const productPrice = getSafe(() => product.price, 0)

    const addToCart = () => {}

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
            <Wrapper>
                <ShowContent show={!!product}>
                    <Columns centered>
                        <Columns.Column className="is-4">
                            <img
                                src={productImgUrl}
                                alt={`${productTitle} image`}
                            />
                        </Columns.Column>
                        <Columns.Column className="is-4">
                            <h2 className="title is-2">{productTitle}</h2>
                            <Panel>
                                <Panel.Block>{productDescription}</Panel.Block>
                                <Panel.Block>{productPrice}</Panel.Block>
                            </Panel>
                            <Button
                                handleClick={addToCart}
                                className="is-success"
                                text="Add to Cart"
                            />
                        </Columns.Column>
                    </Columns>
                </ShowContent>
            </Wrapper>
        </Layout>
    )
}

export default DetailPage

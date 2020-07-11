import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const GET_ALL_PRODUCTS = `
query GetProducts {
  allProducts {
    title,
    description,
    price
  }
}`

const IndexPage = () => {
    const [stickers, setStickers] = useState([])

    useEffect(() => {
        const fetchStickers = async () => {
            const results = await axios.post('/admin/api', {
                query: GET_ALL_PRODUCTS
            })
            setStickers(results.data.data.allProducts)
        }

        fetchStickers()
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <h1 className="title is-1">Welcome</h1>
            <p>Welcome to your new Gatsby site.</p>
            <div className="box">
                <ul>
                    {stickers &&
                        stickers.map(sticker => (
                            <li>
                                {sticker.title} :: {sticker.description} :: $
                                {sticker.price}
                            </li>
                        ))}
                </ul>
            </div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </Layout>
    )
}

export default IndexPage

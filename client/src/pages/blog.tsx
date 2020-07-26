import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogContainer from '../containers/BlogContainer'

const BlogPage = () => (
    <Layout>
        <SEO title="Blog" />
        <Hero type="primary">
            <h1 className="title">Blog</h1>
        </Hero>
        <BlogContainer />
    </Layout>
)

export default BlogPage

import React from 'react'
import { Link } from 'gatsby'

import Columns from '../components/Columns'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

const BlogPage = () => (
    <Layout>
        <SEO title="Blog" />
        <Hero type="primary">
            <h1 className="title">Blog</h1>
        </Hero>
        <Wrapper>
            <Columns>
                <Columns.Column>
                    <p>
                        Your new page.
                        <br />
                        <Link to="/">Go Home</Link>
                    </p>
                </Columns.Column>
            </Columns>
        </Wrapper>
    </Layout>
);

export default BlogPage;
import React from 'react'
import { Link } from 'gatsby'
import Columns from '../components/Columns'
import Wrapper from '../components/Wrapper'

const BlogContainer = () => {
    return (
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
    )
}

export default BlogContainer

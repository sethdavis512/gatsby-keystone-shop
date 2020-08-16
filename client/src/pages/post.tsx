import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import useParams from '../hooks/useParams'
import PostContainer from '../containers/PostContainer'
import usePosts from '../hooks/usePosts'
import useMarkdown from '../hooks/useMarkdown'

const PostPage = ({ location }) => {
    const params = useParams(location)
    const postData = usePosts(params.postId as string)
    const converted = useMarkdown(postData.content)

    return (
        <Layout>
            <SEO title="Post" />
            <PostContainer
                title={postData.title}
                convertedMarkdown={converted}
            />
        </Layout>
    )
}

export default PostPage

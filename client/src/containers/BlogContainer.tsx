import React from 'react'
import Wrapper from '../components/Wrapper'
import ShowContent from '../components/ShowContent'
import { usePosts } from '../hooks/usePosts'

const BlogContainer = () => {
    const posts = usePosts()

    return (
        <Wrapper>
            <ShowContent show={posts.length > 0}>
                <ul>
                    {posts.map(p => (
                        <li key={p.title}>
                            <h4 className="title is-4">{p.title}</h4>
                            <p>{p.description}</p>
                        </li>
                    ))}
                </ul>
            </ShowContent>
        </Wrapper>
    )
}

export default BlogContainer

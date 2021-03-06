import React from 'react'
import { Link } from 'gatsby'
import Wrapper from '../components/Wrapper'
import ShowContent from '../components/ShowContent'
import usePosts from '../hooks/usePosts'

const BlogContainer = () => {
    const posts = usePosts()

    return (
        <Wrapper>
            <ShowContent show={posts.length > 0}>
                <ul>
                    {posts.map(p => (
                        <Link to={`/post?postId=${p.id}`}>
                            <li
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    padding: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}
                                key={p.title}
                            >
                                <h4 className="title is-4">{p.title}</h4>
                                <p>{p.description}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </ShowContent>
        </Wrapper>
    )
}

export default BlogContainer

import React from 'react'
import Wrapper from '../components/Wrapper'
import ShowContent from '../components/ShowContent'

const PostContainer = ({ convertedMarkdown, title }) => {
    return (
        <Wrapper isCentered hasColumns columnClassName="is-6">
            <ShowContent show={convertedMarkdown}>
                <h1 className="title is-1">{title}</h1>
                <div
                    className="box content"
                    dangerouslySetInnerHTML={{ __html: convertedMarkdown }}
                ></div>
            </ShowContent>
        </Wrapper>
    )
}

export default PostContainer

import React from 'react'
import { Link } from 'gatsby'
import Wrapper from '../components/Wrapper'

const AboutContainer = () => {
    return (
        <Wrapper>
            <p>
                Your new page.
                <br />
                <Link to="/">Go Home</Link>
            </p>
        </Wrapper>
    )
}

export default AboutContainer

import React from 'react'
import Spinner from './Spinner'

const ShowContent = ({ children, show }) => (show ? children : <Spinner />)

export default ShowContent

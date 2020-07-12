import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { useSiteMetaData } from '../hooks/useSiteMetaData'

import './layout.css'
import '../styles/global.scss'

const Layout = ({ children }) => {
    const { title } = useSiteMetaData()

    return (
        <>
            <Header siteTitle={title} />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout

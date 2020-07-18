import React from 'react'

import { GlobalProvider } from './GlobalProvider'
import Header from './Header'
import Footer from './Footer'

import '../styles/global.scss'

const Layout = ({ children }) => {
    return (
        <GlobalProvider providerValue={{}}>
            <Header />
            <main>{children}</main>
            <Footer />
        </GlobalProvider>
    )
}

export default Layout

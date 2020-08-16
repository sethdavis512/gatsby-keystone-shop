import React from 'react'
import Header from './Header'
import Footer from './Footer'

import '../styles/global.scss'

const Main = ({ children }) => <main>{children}</main>

const Layout = ({ children }) => (
    <>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </>
)

export default Layout

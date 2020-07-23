import React from 'react'

import { GlobalProvider } from '../contexts/GlobalProvider'
import { CartProvider } from '../contexts/CartProvider'
import Header from './Header'
import Footer from './Footer'

import '../styles/global.scss'

const Main = ({ children }) => <main>{children}</main>

const Layout = ({ children }) => (
    <GlobalProvider>
        <CartProvider>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </CartProvider>
    </GlobalProvider>
)

export default Layout

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react')

const { GlobalProvider } = require('./src/contexts/GlobalProvider')
const { CartProvider } = require('./src/contexts/cart/CartProvider')

exports.wrapRootElement = ({ element }) => {
    return (
        <GlobalProvider>
            <CartProvider>{element}</CartProvider>
        </GlobalProvider>
    )
}

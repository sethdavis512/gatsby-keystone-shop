require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `GKS`,
        description: `An e-commerce site built with Gatsby, Keystone, and Stripe.`,
        author: `@gatsbyjs`,
        menuLinks: [
            { label: 'About', url: '/about' },
            { label: 'Contact', url: '/contact' },
            { label: 'Blog', url: '/blog' }
        ]
    },
    proxy: {
        prefix: '/admin',
        url: 'http://localhost:3000'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-stripe`,
        {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: ['Price'],
                secretKey: process.env.GATSBY_STRIPE_KEY,
                downloadFiles: true
            }
        }
    ]
}

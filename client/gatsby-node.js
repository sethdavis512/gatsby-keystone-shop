const kebabCase = require('lodash/kebabCase')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allStripePrice {
                edges {
                    node {
                        active
                        id
                        unit_amount
                        currency
                        product {
                            name
                            description
                        }
                    }
                }
            }
        }
    `)

    result.data.allStripePrice.edges.forEach(edge => {
        const { active, product, unit_amount: price, id } = edge.node
        const { description, name } = product

        if (active) {
            createPage({
                path: `/product/${kebabCase(name)}`,
                component: require.resolve('./src/pages/shop/detail.tsx'),
                context: {
                    product: {
                        id,
                        name,
                        description,
                        price
                    }
                }
            })
        }
    })
}

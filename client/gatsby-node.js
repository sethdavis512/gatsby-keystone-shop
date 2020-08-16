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
                        id
                        unit_amount
                        currency
                        product {
                            id
                            name
                            description
                        }
                    }
                }
            }
        }
    `)

    result.data.allStripePrice.edges.forEach(edge => {
        const { product, unit_amount, id: nodeId } = edge.node
        createPage({
            path: `/product/${kebabCase(edge.node.product.name)}`,
            component: require.resolve('./src/pages/shop/detail.tsx'),
            context: {
                product: {
                    id: nodeId,
                    name: product.name,
                    description: product.description,
                    price: unit_amount
                }
            }
        })
    })
}

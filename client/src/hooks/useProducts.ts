import { useStaticQuery, graphql } from 'gatsby'

const useProducts = () => {
    const data = useStaticQuery(graphql`
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

    const products = data.allStripePrice.edges.map(edge => ({
        active: edge.node.active,
        id: edge.node.id,
        name: edge.node.product.name,
        description: edge.node.product.description,
        price: edge.node.unit_amount
    }))

    return [products]
}

export default useProducts

import { useStaticQuery, graphql } from 'gatsby'

const useProducts = () => {
    const data = useStaticQuery(graphql`
        query {
            allStripePrice {
                edges {
                    node {
                        id
                        unit_amount
                        currency
                        product {
                            active
                            id
                            name
                            description
                        }
                    }
                }
            }
        }
    `)

    const products = data.allStripePrice.edges.map(edge => ({
        id: edge.node.id,
        name: edge.node.product.name,
        description: edge.node.product.description,
        price: edge.node.unit_amount
    }))

    return [products]
}

export default useProducts

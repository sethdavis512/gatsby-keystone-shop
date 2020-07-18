export const GET_ALL_PRODUCTS = `
query GetProducts {
    allProducts {
        id
        title
        description
        image {
            publicUrl
        }
        price
    }
}`

export const GET_PRODUCT = `
query GetProduct($id: ID!) {
    Product(where: { id: $id }) {
        title
        description
        image {
            publicUrl
        }
        price
    }
}`

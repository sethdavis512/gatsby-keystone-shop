export const GET_ALL_POSTS = `
query GetPosts {
    allPosts {
        id
        title
        description
    }
}`

export const GET_POST = `
query GetPost($id: ID!) {
    Post(where: { id: $id }) {
        id
        title
        content
    }
}`

import { getSafe } from './../utils/utilFunctions'
import useAxios from './useAxios'
import { GET_ALL_POSTS, GET_POST } from '../queries/Post'

const usePosts = (id?: string) => {
    if (id) {
        const response = useAxios(GET_POST, {
            id
        })

        return getSafe(() => response.data.Post, {})
    } else {
        const response = useAxios(GET_ALL_POSTS)

        return getSafe(() => response.data.allPosts, [])
    }
}

export default usePosts

import { getSafe } from './../utils/utilFunctions'
import { useAxios } from './useAxios'
import { GET_ALL_POSTS } from '../queries/Post'

export const usePosts = () => {
    const response = useAxios(GET_ALL_POSTS)
    return getSafe(() => response.data.allPosts, [])
}

import { getSafe } from './../utils/utilFunctions'
import { useAxios } from './useAxios'
import { GET_PRODUCT } from '../queries/Product'

export const useProduct = id => {
    const response = useAxios(GET_PRODUCT, {
        id
    })

    return getSafe(() => response.data.Product, {})
}

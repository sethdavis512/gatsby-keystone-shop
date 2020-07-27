import { getSafe } from './../utils/utilFunctions'
import { GET_ALL_PRODUCTS } from '../queries/Product'
import { useAxios } from './useAxios'

export const useProducts = () => {
    const response = useAxios(GET_ALL_PRODUCTS)
    return getSafe(() => response.data.allProducts, [])
}

import { useEffect, useState } from 'react'
import axios from 'axios'
import { GET_PRODUCT } from '../queries/Product'

export const useProduct = id => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await axios.post('/admin/api', {
                query: GET_PRODUCT,
                variables: {
                    id
                }
            })
            setProduct(results.data.data.Product)
        }

        fetchProducts()
    }, [])

    return product
}

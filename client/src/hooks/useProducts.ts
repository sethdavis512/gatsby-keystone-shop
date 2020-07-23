import { useEffect, useState } from 'react'
import axios from 'axios'
import { GET_ALL_PRODUCTS } from '../queries/Product'

export const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await axios.post('/admin/api', {
                query: GET_ALL_PRODUCTS
            })
            setProducts(results.data.data.allProducts)
        }

        fetchProducts()
    }, [])

    return products
}

import { useContext } from 'react'
import { CartContext } from '../contexts/CartProvider'

export const useCart = () => useContext(CartContext)

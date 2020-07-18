import { useContext } from 'react'
import { GlobalContext } from '../components/GlobalProvider'

export const useGlobalContext = () => useContext(GlobalContext)

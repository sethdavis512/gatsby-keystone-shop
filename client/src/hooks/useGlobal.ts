import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalProvider'

export const useGlobal = () => useContext(GlobalContext)
